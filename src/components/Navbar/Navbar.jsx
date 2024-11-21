import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

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
        <div className="navbar bg-base-100">
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
                            <NavLink className='' to='/AboutUs'>About Us</NavLink>
                        </div>
                            : ''}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Career Counseling</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink className='px-4 py-2' to='/'>Home</NavLink>
                {user ? <div>
                    <NavLink className='px-4 py-2' to='/Services'>Services</NavLink>
                    <NavLink className='px-4 py-2' to='/AboutUs'>About Us</NavLink>
                </div>
                    : ''}
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {user ? ''
                        : <NavLink className='px-4 py-2' to='/Register'>Register</NavLink>}

                    {user && <div className="text-white mr-2">
                        <div>
                            {user.photoURL === '' ? <p className="text-center p-2">{user.displayName}</p> : <img title={user?.displayName} className="w-8 h-8 cursor-pointer rounded-full" src={`${user?.photoURL}`} alt="" />}
                        </div>
                    </div>}
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
                            :
                            <NavLink className='px-4 py-2' to='/LogIn'>LogIn</NavLink>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;