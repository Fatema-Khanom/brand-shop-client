import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar w-full m-auto relative bg-black mb-10 rounded ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/addproduct"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        }
                        
                        >
                       Add Product
                        </NavLink></li>
                    <li><NavLink
                        to="/mycart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                            My cart
                        </NavLink></li>
                    <li><NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } className="text-white"
                        >
                            Login
                        </NavLink></li>
                    
                </ul>
                </div>
                <img className='h-10 ml-4' src="https://i.ibb.co/N1hb1TJ/logo-removebg-preview.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "bg-red-500"
                        }className="text-white font-semibold text-xl"
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/addproduct"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }className="text-white font-semibold text-xl"
                        
                        >
                      Add Product
                        </NavLink></li>
                    <li><NavLink
                        to="/mycart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }className="text-white font-semibold text-xl"
                        >
                        My Cart
                        </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end pr-4">
               <ul className='menu menu-horizontal px-1'>
                
               <li><NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "bg-red-500"
                        } className="text-white font-semibold text-xl"
                        >
                        Login
                        </NavLink></li>
               
                
               </ul>
               
               
            </div>
            </div>
        </div>
    );
};

export default Navbar;