import React from 'react';
import Banner from './Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
 
    return (
        <div >
            <div className='bg-[#9538E2] rounded-b-3xl pb-64'>
            <Banner></Banner>
            </div>
            <div className='mt-[5em] md:mt-[10em] lg:mt-[18em] xl:mt-[25em] 2xl:mt-[32em] space-y-20'>
                <h1 className='text-4xl md:text-5xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h1>
                <Gadgets></Gadgets>
            </div>
            
        </div>
    );
};

export default Home;