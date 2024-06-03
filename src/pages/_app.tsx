import useLogin from "@/hooks/useLogin";
import "@/styles/globals.css";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const { replace, refresh } = useRouter()
  const params = useParams();
  const { isLogin } = useLogin()
  useEffect(() => {
    if (!Cookies.get(`token`)) {
      replace('/login')
    }
  }, [params])
  const logout = () => {
    Cookies.remove('token')
    replace('/login')
    refresh()
  }
  return (
    <>
      {isLogin && <button onClick={logout}>LOGOUT</button>}
      <Component {...pageProps} />
    </>
  )
}
