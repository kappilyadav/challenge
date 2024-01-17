import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Social = () => {
    return (
        <div>
            <div className='bg-yellow-400 h-64 rotate-[18deg] -mx-32 mt-40'></div>
            <div className='relative -top-52 flex items-center flex-col'>
                <h1 className='text-9xl text-slate-600 opacity-15'>SOCIAL</h1>
            </div>

            <h1 className='flex font-bold text-white'>Follow Us  <FaFacebook size={22} /></h1>
            <h1 className='flex font-bold text-white'>Follow Us  <AiFillTwitterCircle size={25} /></h1>
        </div>
    )
}

export default Social