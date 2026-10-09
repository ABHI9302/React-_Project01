import React from 'react'

const Nav = () => {
  return (
    <nav className='flex h-fit gap-4 text-2xl font-light'>
      <a href="#">About</a>
      <a href="#">Mission</a>
      <a href="#">Products</a>
      <button className='px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-amber-500'>Contact</button>

    </nav>
  )
}

export default Nav