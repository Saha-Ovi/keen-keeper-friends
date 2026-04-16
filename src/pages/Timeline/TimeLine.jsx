import React, { useContext, useState } from 'react';
import { ActionContext } from '../../context/ActionContext';
import { FaDatabase } from 'react-icons/fa';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const TimeLine = () => {
    const { activeAction } = useContext(ActionContext);
    const [sortType, setSortType] = useState('');

    // console.log(activeAction);
    // console.log(sortType);

    const filterData = sortType ?
        activeAction.filter(action => action.type === sortType)
        : activeAction;
    return (
        <div className='container mx-auto my-10 space-y-4'>

            <div className='flex justify-center items-center'>
                <div className="dropdown  dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Filter TimeLine  ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortType("")}><a>All</a></li>
                        <li onClick={() => setSortType("call")}><a>Call</a></li>
                        <li onClick={() => setSortType("text")}><a>Text</a></li>
                        <li onClick={() => setSortType("video")}><a>Video</a></li>
                    </ul>
                </div>
            </div>

            {
                (filterData.length === 0) ?
                    (
                        <div className='flex flex-col justify-center items-center my-10 bg-base-200 shadow-2xl rounded-2xl p-8'>
                            <p className='text-center text-2xl md:text-4xl lg:text-6xl'><FaDatabase /></p>
                            <p className='text-xl lg:text-3xl'>There is No Data Available</p>

                        </div>
                    )
                    :
                    (
                        filterData.map((action, index) =>
                            <div key={index} className='p-3 lg:p-0'>
                                <div className='flex gap-4 items-center shadow-sm rounded-xl px-4 py-6'>
                                    {/* left */}
                                    <div>
                                        {action.type === 'call' && <img src={callImg} alt="" />}
                                        {action.type === 'text' && <img src={textImg} alt="" />}
                                        {action.type === 'video' && <img src={videoImg} alt="" />}
                                    </div>
                                    {/* right */}
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
                    )

            }
        </div>
    );
};

export default TimeLine;