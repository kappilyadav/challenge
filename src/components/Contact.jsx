import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='flex items-center flex-col'>
                <h1 className='text-9xl text-gray-200'>CONTACT</h1>
                <h3 className='text-2xl font-semibold relative -top-10 w-4/6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo </h3>
            </div>

            <form action="">
                <div className='grid grid-cols-2' >
                    <input className='border-2 border-black' type="text" placeholder='NAME' />
                    <input className='border-2 border-black' type="text" placeholder='EMAIL ADDRESS' />

                    <input className='border-2 border-black' type="text" placeholder='PHONE' />
                    <input className='border-2 border-black' type="text" placeholder='COUNTRY' />
                </div>

                <button className='bg-blue-600' type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact