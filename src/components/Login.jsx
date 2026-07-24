import React from 'react'
import {BG_URL} from '../utils/constant'
import Headers from './Header'
const Login = () => {
  return (
    <div>
      <Headers />
      <img src= {BG_URL} alt="Netflix Logo" />
    </div>
  )
}

export default Login