import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Social = () => {
    return (
        <div className='bg-yellow-400'>
            <div className='flex items-center flex-col'>
                <h1 className='text-9xl text-yellow-500'>SOCIAL</h1>
            </div>

            <h1 className='flex font-bold text-white'>Follow Us  <FaFacebook size={22} /></h1>
            <h1 className='flex font-bold text-white'>Follow Us  <AiFillTwitterCircle size={25} /></h1>
        </div>
    )
}

export default Social