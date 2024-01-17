import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col items-end justify-center'>
            <div className='flex items-center flex-col'>
                <h1 className='text-9xl text-gray-200'>CONTACT</h1>
                <h3 className='text-xl font-semibold relative -top-5 left-5 w-5/6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo </h3>
            </div>

            <div className='grid grid-cols-2 gap-9 px-20 mt-10' >
                <input className='border-2 border-black py-2 px-8' type="text" placeholder='NAME' />
                <input className='border-2 border-black py-2 px-8' type="text" placeholder='EMAIL ADDRESS' />

                <input className='border-2 border-black py-2 px-8' type="text" placeholder='PHONE' />
                <input className='border-2 border-black py-2 px-8' type="text" placeholder='COUNTRY' />
            </div>

            <div>
                <button className='bg-blue-600' type="submit">SUBMIT</button>
            </div>
        </div >
    )
}

export default Contact