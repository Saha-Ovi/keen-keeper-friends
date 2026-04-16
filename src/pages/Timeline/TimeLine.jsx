import React, { useContext } from 'react';
import { ActionContext } from '../../context/ActionContext';
import { FaDatabase } from 'react-icons/fa';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const TimeLine = () => {
    const { activeAction } = useContext(ActionContext);
    // console.log(activeAction);
    if (activeAction.length === 0) {
        return (
            <div className='flex flex-col justify-center items-center my-10 bg-base-200 shadow-2xl rounded-2xl p-8'>
                <p className='text-center text-2xl md:text-4xl lg:text-6xl'><FaDatabase /></p>
                <p className='text-3xl'>There is No Data Available</p>

            </div>
        )
    }
    return (
        <div>
            {
                activeAction.map((action, index) =>
                    <div key={index} className='container mx-auto my-10 space-y-2 p-3 lg:p-0'>
                        <div className='flex gap-4 items-center shadow-sm rounded-xl px-4 py-6'>
                            <div className='flex justify-between items-center'>
                                {action.type === 'call' && <img src={callImg} alt="" />}
                                {action.type === 'text' && <img src={textImg} alt="" />}
                                {action.type === 'video' && <img src={videoImg} alt="" />}
                            </div>
                            <div>
                                {action.type === 'call' && <div>
                                    <p>Call with {action.card.name} </p>
                                    <p>
                                        {new Date().toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true
                                        })}
                                    </p>
                                </div>}
                                {action.type === 'text' && <div>
                                    <p>Text with {action.card.name} </p>
                                    <p>
                                        {new Date().toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true
                                        })}
                                    </p>
                                </div>}
                                {action.type === 'video' && <div>
                                    <p>Video with {action.card.name} </p>
                                    <p>
                                        {new Date().toLocaleString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true
                                        })}
                                    </p>
                                </div>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TimeLine;