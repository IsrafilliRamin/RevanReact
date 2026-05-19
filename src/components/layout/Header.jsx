import React from 'react'

const Header = () => {
  return (
    <header className='h-[100px] bg-green-400'>
        <nav>
            <ul className='flex items-center justify-between  py-5 px-10 text-white font-bold text-lg'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header