import React, { useContext } from 'react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { CiVideoOn } from 'react-icons/ci';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { LuArchive, LuPhoneCall } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';
import { ActionContext } from '../../context/ActionContext';

const DetailsPage = () => {
    const { id } = useParams();
    // console.log(params);
    const friends = useLoaderData();
    // console.log(friends);
    const friend = friends.find(friend => friend.id === Number(id));
    // console.log(friend);
    const{handleAction}=useContext(ActionContext);

    return (
        <div className='container mx-auto my-6 lg:my-10'>
            <div className='grid grid-cols-1 justify-center items-center lg:grid-cols-2'>
                {/* left */}
                <div className='space-y-4 w-full  md:w-[80%] lg:w-[90%] mx-auto'>
                    <div className="card bg-base-100  shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={friend.picture}
                                className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{friend.name}</h2>
                            <p>{friend.days_since_contact} day ago</p>

                            <div className={`badge ${friend.status === "on-track" ? "bg-[#244D3F] text-white" : friend.status === "overdue" ? "bg-[#EF4444] text-white" : "bg-[#EFAD44] text-white"}`} >
                                {friend.status}
                            </div>
                            <div>
                                {
                                    friend.tags.map((tag, index) =>
                                        <div key={index} className='badge px-2 py-4 justify-center items-center bg-green-100 text-[#244D3F] gap-2 rounded-full'>
                                            {tag}
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                <p>{friend.bio}</p>
                                <p>{friend.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 lg:p-0'>
                        <button className="btn w-full"><HiOutlineBellSnooze />Snooze 2 weeks</button>
                    </div>
                    <div className='p-2 lg:p-0'>
                        <button className="btn w-full"><LuArchive />Archive</button>
                    </div>
                    <div className='p-2 lg:p-0'>
                        <button className="btn w-full text-red-500"><RiDeleteBin6Line />Delete</button>
                    </div>
                </div>
                {/* right */}
                <div className='space-y-4'>
                    {/* 1st card */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                        <div className='shadow-sm rounded-2xl text-center px-2 py-4'>
                            <h4 className='text-2xl font-semibold text-[#244D3F]'>{friend.days_since_contact} </h4>
                            <p className='text-lg'>Days Since Contact</p>
                        </div>
                        <div className='shadow-sm rounded-2xl text-center px-2 py-4'>
                            <h4 className='text-2xl font-semibold text-[#244D3F]'>{friend.goal} </h4>
                            <p className='text-lg'>Goal (Days)</p>
                        </div>
                        <div className='shadow-sm rounded-2xl text-center px-2 py-4'>
                            <h4 className='text-2xl font-semibold text-[#244D3F]'>{friend.next_due_date} </h4>
                            <p className='text-lg'>Next Due</p>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className='flex justify-between items-center shadow-sm rounded-2xl px-2 py-15'>
                        <div className='px-4 space-y-2'>
                            <p className='text-[#244D3F] text-xl'>Relationship Goal</p>
                            <p className='text-lg'>Connect every <span className='font-bold text-black'>30 days</span></p>
                        </div>
                        <button className='btn'>Edit</button>
                    </div>
                    {/* 3rd card */}
                    <div className='shadow-sm rounded-2xl px-2 py-8 space-y-4'>
                        <h2 className='text-[#244D3F] text-xl p-2 text-center lg:text-start'>Quick Check-In</h2>
                        <div className='flex flex-col md:flex-row gap-2 justify-between items-center '>
                            <div >
                                <button onClick={()=>handleAction({card:friend,type:"call"})} className='btn flex-col p-15 rounded-2xl'>
                                    <img src={callImg} alt="" />
                                    Call
                                </button>

                            </div>
                            <div>
                                <button onClick={()=>handleAction({card:friend,type:'text'})} className='btn flex-col p-15 rounded-2xl'>
                                    <img src={textImg} alt="" />
                                    Text
                                </button>
                            </div>
                            <div>
                                <button onClick={()=>handleAction({card:friend,type:'video'})} className='btn flex-col p-15 rounded-2xl'>
                                    <img src={videoImg} alt="" />
                                    Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;

