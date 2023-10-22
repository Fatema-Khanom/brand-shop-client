


import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const [mode, setMode] = useState('light');
    const { user, logout } = useContext(AuthContext);

    function changeTheme() {
        const html = document.documentElement;
        if (mode === 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            setMode('dark');
            localStorage.setItem('mode', 'dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            setMode('light');
            localStorage.setItem('mode', 'light');
        }
    }

    useEffect(() => {
        const currentMode = localStorage.getItem('mode') || 'light';
        document.documentElement.classList.add(currentMode);
        setMode(currentMode);
    }, []);

    const handleLogout = () => {
        logout().then(() => {
            
        });
    };

    return (
        <div>
            <div className={`navbar w-full m-auto relative ${mode === 'dark' ? 'bg-white' : 'bg-red-700'} mb-10 rounded`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'active' : ''
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addproduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'ac' : ''
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/mycart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'active' : ''
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <img
                        className="h-10 ml-4"
                        src="https://i.ibb.co/N1hb1TJ/logo-removebg-preview.png"
                        alt=""
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? 'pending' : isActive ? 'active' : ''
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addproduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? 'pending' : isActive ? 'active' : ''
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/mycart"
                                className={({ isActive, isPending }) =>
                                    isPending ? 'pending' : isActive ? 'active' : ''
                                }
                            >
                                My Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-4">
                    <div>
                        {user ? (
                            <div className="flex items-center -ml-20">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="h-10 w-10 bg-black rounded-full"
                                />
                                <span className="ml-2">{user.email}</span>
                                <button onClick={handleLogout} className="btn btn">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? 'pending' : isActive ? 'active' : ''
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/signup"
                                        className={({ isActive, isPending }) =>
                                            isPending ? 'pending' : isActive ? 'active' : ''
                                        }
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <button onClick={changeTheme}>
                    <FontAwesomeIcon
                        icon={faCircleHalfStroke}
                        style={{
                            color: '#010813',
                            width: '24px',
                            height: '24px',
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
