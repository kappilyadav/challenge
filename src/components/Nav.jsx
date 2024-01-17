import React from 'react'

const Nav = () => {
    return (
        <div className='flex absolute top-0 w-full bg-yellow-400 h-16 items-center justify-end gap-20 px-20 opacity-85'>
            <a className='text-blue-500 text-xl font-semibold' href="#home">Home</a>
            <a className='text-blue-500 text-xl font-semibold' href="#about">About</a>
            <a className='text-blue-500 text-xl font-semibold' href="#social">Social</a>
            <a className='text-blue-500 text-xl font-semibold' href="#services">Services</a>
            <a className='text-blue-500 text-xl font-semibold' href="#contact">Contact</a>
        </div>
    )
}

export default Nav