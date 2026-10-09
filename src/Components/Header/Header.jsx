import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className=' flex justify-between py 3'>
      <Logo/>
      <Nav/>
    </header>
    
  )
}

export default Header