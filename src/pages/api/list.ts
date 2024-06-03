// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { medicalViitHistoryId, medicalViitHistoryToken, headers, accessToken } from "@/lib/variables";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { mail, password } = req.body
  // const hashedPassword = await bcrypt.hash('Zkdnsxj11?', 10)
  const options = {
    method: 'GET',
    handler: {
      'Content-Type': 'application/json',
    },
    headers: headers(medicalViitHistoryToken),
  }
  const respons = await fetch(
    `https://api.notion.com/v1/databases/${medicalViitHistoryId}/query`,
    options
  )
  console.log(respons)
  try {
    const data = await respons.json()
    console.log(data)
    // const users = data.results.map((item: any) => ({
    //   mail: item.properties.mail.rich_text.map((text: any) => text.plain_text).join(),
    //   password: item.properties.password.rich_text.map((text: any) => text.plain_text).join()
    // }))

    res.status(200).json({ status : 200, data})
  } catch (error) {
    return res.status(500).send(error)
  }
}
