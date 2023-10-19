

// import  { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext);

//     const handleLogout = () => {
//         logout().then(() => {
            
//         });
//     };

//     return (
//         <div>
//             <div className="navbar w-full m-auto relative bg-red-700  mb-10 rounded">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex="0" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </label>
//                         <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/addproduct"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                 >
//                                     Add Product
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/mycart"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                 >
//                                     My cart
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/login"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                     className="text-white"
//                                 >
//                                     Login
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/signup"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                     className="text-white"
//                                 >
//                                     SignUp
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                     <img className='h-10 ml-4' src="https://i.ibb.co/N1hb1TJ/logo-removebg-preview.png" alt="" />
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : "bg-red-500"
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/addproduct"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : ""
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 Add Product
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/mycart"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : ""
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 My Cart
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end pr-4">
//                     {user && <button onClick={handleLogout} className='btn btn'>Logout</button>}
//                     <p>{user ? user.email : ''}</p>
//                     <ul className='menu menu-horizontal px-1'>
//                         <li>
//                             <NavLink
//                                 to="/login"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : "bg-red-500"
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 Login
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/signup"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : "bg-red-500"
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 SignUp
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext);

//     const handleLogout = () => {
//         logout().then(() => {
//             // Handle any additional actions after logout if needed
//         });
//     };

//     return (
//         <div>
//             <div className="navbar w-full m-auto relative bg-red-700  mb-10 rounded">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex="0" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </label>
//                         <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                             <li>
//                                 <NavLink
                                    
//                                     to="/"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/addproduct"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                 >
//                                     Add Product
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/mycart"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                 >
//                                     My cart
//                                 </NavLink>
//                             </li>
//                             {/* <li>
//                                 <NavLink
//                                     to="/login"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                     className="text-white"
//                                 >
//                                     Login
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/signup"
//                                     className={({ isActive, isPending }) =>
//                                         isPending ? "pending" : isActive ? "active" : ""
//                                     }
//                                     className="text-white"
//                                 >
//                                     SignUp
//                                 </NavLink>
//                             </li> */}
//                         </ul>
//                     </div>
//                     <img className='h-10 ml-4' src="https://i.ibb.co/N1hb1TJ/logo-removebg-preview.png" alt="" />
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         <li>
//                             <NavLink
//                                 exact // Add this line
//                                 to="/"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : "bg-red-500"
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/addproduct"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : ""
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 Add Product
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/mycart"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : ""
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 My Cart
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="navbar-end pr-4">
//                     {user && <button onClick={handleLogout} className='btn btn'>Logout</button>}
//                     <p>{user ? user.email : 'Guest'}</p>
//                     <ul className='menu menu-horizontal px-1'>
//                         <li>
//                             <NavLink
//                                 to="/login"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : "bg-red-500"
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 Login
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/signup"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "active" : "bg-red-500"
//                                 }
//                                 className="text-white font-semibold text-xl"
//                             >
//                                 SignUp
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    const handleLogout = () => {
        logout().then(() => {
            // Handle any additional actions after logout if needed
        });
    };

    return (
        <div>
            <div className="navbar w-full m-auto relative bg-red-700  mb-10 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
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
                        My Cart
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
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/addproduct"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
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
                        My Cart
                        </NavLink></li>
                </ul>

                </div>
                <div className="navbar-end pr-4">
                    {user && <button onClick={handleLogout} className='btn btn'>Logout</button>}
                    <p>{user ? user.email : 'Guest'}</p>
                    <ul className='menu menu-horizontal px-1'>
                
               <li><NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        Login
                        </NavLink></li>
               
                <li><NavLink
                        to="/signup"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        Sign Up
                        </NavLink></li>
               </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
