import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    
    return (
        <div className='text-center relative'>
            <div className='w-[90%] mx-auto text-white space-y-5'>
                <h1 className='text-4xl xl:text-5xl font-semibold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn btn-lg rounded-full outline-none hover:outline-none w-[12em] 
                                  transition-all duration-300 ease-in-out hover:scale-105 focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white">
                    Shop Now
                </button>
            </div>
            <div className='border-2 rounded-3xl w-[90%] md:w-[70%] bg-[#fffefe59] absolute mx-auto left-0 right-0 mt-3 p-3 md:p-5 md:mt-10'>
                <img className='rounded-3xl' src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;