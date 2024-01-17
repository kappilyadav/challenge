import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <div>
            <div>
                <h1 className='text-xl'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </h1>
                <h3 className='text-sm'>Martha</h3>
            </div>

            <div className='flex gap-2'>
                <FaArrowLeftLong />
                <FaArrowRightLong />
            </div>
        </div>


    )
}

export default Testimonial