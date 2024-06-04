// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { usersDatabaseId, dataBaseUrl, headers, notionUsersBaseToken, accessToken } from "@/lib/variables";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { notionDataFormatting } from "@/lib/notionDataFormatting";
import { revalidatePath } from "next/cache"
type RichTextType = { rich_text: { plain_text: string }[] }
type PropertiesType = {
  properties: Record<'mail' | 'password', RichTextType>;
}
type Users = {
  mail: string
  password: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { mail, password } = req.body
  // const hashedPassword = await bcrypt.hash('Zkdnsxj11?', 10)

  const options = {
    method: 'POST',
    handler: {
      'Content-Type': 'application/json',
    },
    headers: headers(notionUsersBaseToken),
  }
  const respons = await fetch(
    `https://api.notion.com/v1/databases/${usersDatabaseId}/query`,
    options
  )
  try {
    const data = await respons.json()
    const usersComfim = data.results.map((item: PropertiesType) => {
      console.log(item.properties.mail.rich_text)
      return ({
      mail: item.properties.mail.rich_text.map((text) => text.plain_text).join(),
      password: item.properties.password.rich_text.map((text) => text.plain_text).join()
    })})
    console.log(req.body)
    const userCheck = usersComfim.find((user: Users) => user.mail === mail)
    if (!userCheck) {
      if (mail === undefined) {
        res.status(401).json({ message: '메일을 입력해주세요', status: 401 })
      }
      res.status(402).json({ message: '등록된 메일이 없습니다', status: 402 })
    }
    if (!accessToken) return
    const isMatch = await bcrypt.compare(password, userCheck.password as string)
    if (isMatch) {
      const token = jwt.sign({ id: mail }, accessToken, {
        expiresIn: `24h`,
      })
      res.status(200).json({
        mail,
        token,
        status: 200
      })
    } else {
      res.status(400).json({message: '비밀번호가 틀렸습니다.'})
    }
  } catch (error) {
    return res.status(500).send(error)
  }
}
