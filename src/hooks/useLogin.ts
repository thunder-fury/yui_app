import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'



const useToken = () => {
  const isLogin = Cookies.get('token')
  const [hydrated, setHydrated] = useState<boolean>(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return {
    isLogin: hydrated && isLogin
  }
}

export default useToken
