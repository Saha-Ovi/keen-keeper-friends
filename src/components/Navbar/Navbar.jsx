import React from 'react';
import navImg from '../../assets/KeenKeeper.png'
import { NavLink } from 'react-router';
import { FaHome } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar flex-col md:flex-row container mx-auto ">
                <div className="navbar-start gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/" className={({ isActive }) => ` ${isActive ? "bg-[#244D3F] text-white" : " "}`}><FaHome />Home </NavLink></li>
                            <li><NavLink to="/timeline" className={({ isActive }) => `${isActive ? "bg-[#244D3F] text-white" : " "}`}><IoTimeOutline />Timeline </NavLink></li>
                            <li><NavLink to="/stats" className={({ isActive }) => ` ${isActive ? "bg-[#244D3F] text-white" : " "}`}><TfiStatsUp />Stats </NavLink></li>
                        </ul>
                    </div>
                    <img src={navImg} alt="" />
                </div>

                <div className="hidden md:flex navbar-end gap-4 ">
                    <NavLink to="/" className={({ isActive }) => `btn ${isActive ? "bg-[#244D3F] text-white" : " "}`}><FaHome />Home </NavLink>
                    <NavLink to="/timeline" className={({ isActive }) => `btn ${isActive ? "bg-[#244D3F] text-white" : " "}`}><IoTimeOutline />Timeline </NavLink>
                    <NavLink to="/stats" className={({ isActive }) => `btn ${isActive ? "bg-[#244D3F] text-white" : " "}`}><TfiStatsUp />Stats </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;