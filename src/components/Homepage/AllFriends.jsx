import React, { use } from 'react';
import Card from '../card/Card';

const AllFriends = ({friendsPromise}) => {
    const friends=use(friendsPromise);
    // console.log(friends);
    return (
        <div className='container mx-auto my-8 space-y-6'>
            <h2 className='font-bold text-2xl lg:text-4xl p-3 '>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6'>
                {
                    friends.map(friend=><Card key={friend.id} friend={friend}></Card>)
                }
            </div>
        </div>
    );
};

export default AllFriends;