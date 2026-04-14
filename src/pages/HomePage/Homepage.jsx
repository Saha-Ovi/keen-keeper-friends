import React from 'react';
import Banner from '../../components/Homepage/Banner';
import Stats from '../../components/Homepage/Stats';
import AllFriends from '../../components/Homepage/AllFriends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <AllFriends></AllFriends>
        </div>
    );
};

export default Homepage;