import React from 'react';
import Banner from './Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
 
    return (
        <div >
            <div className='bg-[#9538E2] rounded-b-3xl pb-64'>
            <Banner></Banner>
            </div>
            <div className='mt-[40em] space-y-20'>
                <h1 className='text-5xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h1>
                <Gadgets></Gadgets>
            </div>
            
        </div>
    );
};

export default Home;