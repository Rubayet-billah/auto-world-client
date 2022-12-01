import React from 'react';
import { SiSpeedtest } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addcar">Add Car</Link></li>
        <li><input type="text" placeholder="Type here" className="input input-bordered rounded w-full max-w-xs" /></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-primary font-semibold text-xl md:text-2xl font-mono pl-0 md:pl-1 md:ml-4"><SiSpeedtest className='mr-2' />Auto World</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menuItems}
                </ul>
            </div>
            <label htmlFor="car-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                Filters
            </label>
        </div>
    );
};

export default Header;