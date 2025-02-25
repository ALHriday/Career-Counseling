import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, LogOutUser, setUser, notify } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        LogOutUser()
            .then(() => {
                notify('LogOut Successfull');
                setUser(null);
                navigate('/');
            }
            ).catch(error => error
            )
    }

    return (
        <div className="navbar bg-base-100 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className='' to='/'>Home</NavLink>
                        {user ? <div className="flex flex-col">
                            <NavLink className='' to='/Services'>Services</NavLink>
                        </div>
                            : ''}
                        <NavLink className='' to='/AboutUs'>About Us</NavLink>
                    </ul>
                </div>
                <h1 className="text-[16px] font-bold md:text-xl">Career Counseling</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink className='px-4 py-2' to='/'>Home</NavLink>
                {user ? <div>
                    <NavLink className='px-4 py-2' to='/Services'>Services</NavLink>
                    
                </div>
                    : ''}
                <NavLink className='px-4 py-2' to='/AboutUs'>About Us</NavLink>
            </div>
            <div className="navbar-end">
                <ul className="flex gap-1 p-1">
                    {user ? ''
                        : <NavLink className='p-2' to='/Register'>Register</NavLink>}

                    {user && <div className="text-white mr-2 flex justify-center items-center">
                        <div>
                            {user && user?.email ?
                                <img title={user?.displayName} className="w-9 h-9 cursor-pointer rounded-full border" src={user?.photoURL} />
                                : <FaUserCircle />}
                        </div>
                    </div>}
                    {
                        user && user ?
                            <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
                            :
                            <NavLink className='p-2' to='/LogIn'>LogIn</NavLink>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;