import React from 'react'
import {LOGO} from '../utils/constant'

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2">
      <img className="w-48 p-4" src={LOGO} alt="Netflix Logo" />
    </div>
  )
}

export default Header