import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 lg:p-0'>
                <div className='shadow-xl text-center px-2 md:px-4 py-6 md:py-10 rounded-2xl'>
                    <h3 className='text-2xl md:text-4xl font-bold'>10</h3>
                    <p className='text-lg font-semibold '>Total Friends</p>
                
                </div>
                <div className='shadow-xl text-center px-4 py-10 rounded-2xl'>
                    <h3 className='text-2xl md:text-4xl font-bold'>3</h3>
                    <p className='text-lg font-semibold '>On Track</p>
                
                </div>
                <div className='shadow-xl text-center px-4 py-10 rounded-2xl'>
                    <h3 className='text-2xl md:text-4xl font-bold'>6</h3>
                    <p className='text-lg font-semibold '>Need Attention</p>
                
                </div>
                <div className='shadow-xl text-center px-4 py-10 rounded-2xl'>
                    <h3 className='text-2xl md:text-4xl font-bold'>12</h3>
                    <p className='text-lg font-semibold '>Interaction This Month</p>
                
                </div>
            </div>
        </div>
    );
};

export default Stats;