import React from 'react';
import { Link } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

export default function NavbarButtonsOption({ setLoginUser, loginUser, showToast }) {

    return (
        <div className='dropdown small-window-dropdown'>
            <button type='button' className='bg-transparent border-0' data-bs-toggle="dropdown" aria-expanded="false">
                <div className='navbar-section-btn font-small d-flex cursor-pointer'>
                    <img src="/images/zerodhaicon.png" className='rounded-circle me-2' height={"20"} alt="user" />
                    <p>DEMOUSER</p>
                </div>
            </button>
            <ul className="dropdown-menu navbar-buttons-dropdown">
                <li className='border-bottom p-2'>
                    <p className='fs-5'>{loginUser.username}</p>
                    <p className='font-small-medium text-secondary'>{loginUser.email}</p>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/marketwatch" className='navbar-section-btn' id='dashboard-navbar-btn6'><i className="fa-regular fa-bookmark font-small pe-2"></i>Marketwatch</Link>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/dashboard" className='navbar-section-btn' id='dashboard-navbar-btn1'><i className="fa-regular fa-compass font-small pe-2"></i>Dashboard</Link>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/orders" className='navbar-section-btn' id='dashboard-navbar-btn2'><i className="fa-solid fa-book font-small pe-2"></i>Order</Link>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/holdings" className='navbar-section-btn' id='dashboard-navbar-btn3'><i className="fa-solid fa-briefcase font-small pe-2"></i>Holdings</Link>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/positions" className='navbar-section-btn' id='dashboard-navbar-btn4'><i className="fa-regular fa-file font-small pe-2"></i>Positions</Link>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/bids" className='navbar-section-btn' id='dashboard-navbar-btn5'><i className="fa-regular fa-clock font-small pe-2"></i>Bids</Link>
                </li>
                <li className='px-3 py-1 text-16 border-bottom'>
                    <Link to="/funds" className='navbar-section-btn' id='dashboard-navbar-btn6'><i className="fa-regular fa-file font-small pe-2"></i>Funds</Link>
                </li>

                <li className="px-3 py-1 py-1 text-16 border-bottom text-secondary">
                    <i className="fa-regular fa-user font-small pe-2"></i>My profile
                    <span>/ Setting</span>
                </li>

                <li className='px-2 py-1 py-1 text-16'>
                    <LogoutBtn setLoginUser={setLoginUser} showToast={showToast}/>
                </li>
            </ul>
        </div>
    );
}
