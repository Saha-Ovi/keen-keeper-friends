import React, { Suspense } from 'react';
import Banner from '../../components/Homepage/Banner';
import Stats from '../../components/Homepage/Stats';
import AllFriends from '../../components/Homepage/AllFriends';
const friendsPromise=fetch('/friends.json').then(res=>res.json());
// console.log(friendsPromise);

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Suspense fallback={
               <div className='flex justify-center items-center my-4 scale-150'>
                 <span className="loading loading-spinner loading-xl"></span>
               </div>
                }>
                <AllFriends friendsPromise={friendsPromise}></AllFriends>
            </Suspense>
        </div>
    );
};

export default Homepage;