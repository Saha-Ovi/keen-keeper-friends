import React, { useContext } from 'react';
import { ActionContext } from '../../context/ActionContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FaDatabase } from 'react-icons/fa';


const Stats = () => {
    const { activeAction } = useContext(ActionContext);
    if (activeAction.length === 0) {
        return (
            <div className='flex flex-col justify-center items-center my-10 bg-base-200 shadow-2xl rounded-2xl p-8'>
                <p className='text-center text-2xl md:text-4xl lg:text-6xl'><FaDatabase /></p>
                <p className='text-xl lg:text-3xl'>There is No Data Available</p>

            </div>
        );
    }
    // console.log(activeAction);
    const filterCall = activeAction.filter(action => action.type === "call");
    const filterText = activeAction.filter(action => action.type === "text");
    const filterVideo = activeAction.filter(action => action.type === "video");
    // console.log(filterCall,filterText,filterVideo);
    const data = [
        { name: 'Call', value: filterCall.length, fill: '#0088FE' },
        { name: 'Text', value: filterText.length, fill: '#00C49F' },
        { name: 'Video', value: filterVideo.length, fill: '#FFBB28' },

    ];
    return (
        <div className='container mx-auto my-10 space-y-4'>
            <div >
                <h2 className='text-2xl md:text-4xl font-extrabold text-center'>Friendship Analytics</h2>
            </div>
            <div className='shadow-2xl flex justify-center gap-3 mb-4'>

                <PieChart style={{ width: '80%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"

                        cornerRadius="50%"
                        fill="#8884d8"

                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}

                    />
                    <Legend className='flex justify-center'></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;