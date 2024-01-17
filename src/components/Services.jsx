import React from 'react'

const Services = () => {
    return (
        <div className='px-20 flex flex-col justify-evenly'>
            <div className='flex items-center flex-col'>
                <h1 className='text-9xl text-gray-200'>SERVICES</h1>
                <h3 className='text-2xl font-semibold relative -top-10 w-4/6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo </h3>
            </div>

            <div className='flex items-center justify-evenly'>
                <div className='bg-yellow-200 rounded-full h-56 w-56 flex flex-col items-center justify-center p-5'>
                    <h1 className='text-xl font-bold'>Service 1</h1>
                    <h3 className='text-sm'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet </h3>
                    <a className='font-semibold' href="./">Know More</a>
                </div>
                <div className='bg-yellow-200 rounded-full h-56 w-56 flex flex-col items-center justify-center p-5'>
                    <h1 className='text-xl font-bold'>Service 1</h1>
                    <h3 className='text-sm'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet </h3>
                    <a className='font-semibold' href="./">Know More</a>
                </div>
                <div className='bg-yellow-200 rounded-full h-56 w-56 flex flex-col items-center justify-center p-5'>
                    <h1 className='text-xl font-bold'>Service 1</h1>
                    <h3 className='text-sm'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet </h3>
                    <a className='font-semibold' href="./">Know More</a>
                </div>
            </div>

            <button className='bg-blue-500 w-24' type="submit">VIEW MORE</button>
        </div>
    )
}

export default Services