import React from 'react'
import LoginLeft from '../components/Login/LoginLeft'
import LoginRight from '../components/Login/LoginRight'

function Login() {
  return (
    <div className='flex gap-2 w-full justify-center'>
        <LoginLeft/>
        <LoginRight/>
    </div>
  )
}

export default Login