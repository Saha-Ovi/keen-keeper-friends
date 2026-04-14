import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className='container mx-auto my-8 space-y-4 text-center p-4 lg:p-0'>
            <h2 className='text-2xl md:text-4xl font-extrabold'>Friends to keep close in your life</h2>
            <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'><FiPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;