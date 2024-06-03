import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import useToken from '@/hooks/useLogin'
// import Router from 'next/router'
const Register = () => {
  return (
    <div>
      {<h1>등록</h1>}
      <div>
        <label htmlFor=""></label>
        <input name='' type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input　 name='' type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input name='' type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input name='' type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input name='' type="text" />
      </div>
      <div>
        <label htmlFor=""></label>
        <input name='' type="text" />
      </div>

    </div>
  )
}

export default Register
