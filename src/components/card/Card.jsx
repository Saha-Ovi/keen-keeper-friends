import React from 'react';

const Card = ({ friend }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={friend.picture}
                        className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{friend.name}</h2>
                    <p>{friend.days_since_contact} day ago</p>

                    <div>
                        {
                            friend.tags.map((tag, index) =>
                                <div key={index} className='badge px-2 py-4 justify-center items-center bg-green-100 text-[#244D3F] gap-2 rounded-full'>
                                    {tag}
                                </div>
                            )
                        }
                    </div>

                    <div className={`badge ${friend.status==="on-track"?"bg-[#244D3F] text-white": friend.status==="overdue" ? "bg-[#EF4444] text-white" : "bg-[#EFAD44] text-white"}`} >
                      {friend.status}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
