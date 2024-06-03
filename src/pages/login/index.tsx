import { headers, dataBaseUrl, notionUsersBaseToken } from "@/lib/variables";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Login = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const router = useRouter()
  // const options = {
  //   method: 'POST',
  //   headers,
  //   body: JSON.stringify({ mail: email, password})
  // }
  // const fetcher = async (url: string) => fetch(url, options).then(res =>  res.json())
  useEffect(() => {
    Cookies.get('token') && router.push(`/`)
  },[])
  const handler = async () => {
    try {
      const getData = await fetch(`/api/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, password })
      })
      const data = await getData.json()
      if (data.status === 200) {
        Cookies.set('token', data.token, { expires: 2 })
        if (Cookies.get('token')) {
          router.push('/register')
        }
      }
      // router.refresh()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main >
      {!Cookies.get('token') && <div>
        mail: <input onChange={(e) => setEmail(e.target.value)} type="text" />
        <br />
        password: <input type="password" onChange={(e) => setPassword(e.target.value)} name="" id="" />
        <br />
        <button onClick={handler}>LOGIN</button>
      </div>}
    </main>
  )
}

export default Login
