import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='text-center relative'>
            <div className='w-[70%] mx-auto text-white space-y-5'>
                <h1 className='text-5xl font-semibold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-3xl w-[10em] font-bold text-xl text-[#9538E2]">Shop Now</button>
            </div>
            <div className='border-2  rounded-3xl w-[60%] bg-[#fffefe59] absolute mx-auto left-0 right-0 mt-10 p-7'>
                <img className='rounded-3xl' src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;