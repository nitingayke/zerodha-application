import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import NavbarButtonsOption from "./NavbarButtonsOption";
import LogoutBtn from './LogoutBtn';

export default function Navbar({setLoginUser, user, showToast}) {
    const [dashboardSectionBtn, setDashboardSectionBtn] = useState("dashboard-navbar-btn1");

    let handleDashboardSectionBtn = (btn) => {
        document.getElementById(dashboardSectionBtn).classList.remove("dashboard-section-btn");
        document.getElementById(btn).classList.add("dashboard-section-btn");
        setDashboardSectionBtn(btn);
    }

    return (
        <nav className='fixed-top border-bottom dashboard-navbar'>
            <div className='d-flex align-item-center col-12 col-lg-11 mx-auto'>

                <div className='d-flex border-end left-Navbar py-1'>
                    <div className='px-2 w-50'>
                        <p className='font-small-medium fw-medium'>NIFTY 50</p>
                        <p className='font-small-medium fw-medium text-danger single-line-visible'>18181.75<span className='font-small text-secondary'>-104.75 (-0.57%)</span></p>
                    </div>
                    <div className='px-2'>
                        <p className='font-small-medium fw-medium'>SENSEX</p>
                        <p className='font-small-medium fw-medium text-danger single-line-visible'>18181.75 <span className='font-small text-secondary'>-104.75 (-0.57%)</span></p>
                    </div>
                </div>

                <div className='d-flex flex-grow-1 align-items-center justify-content-between px-2'>
                    <div className='d-flex'>
                        <img src="/images/kite-logo.svg" className='header-kite-icon' alt="" />
                    </div>
                    <div className='d-flex flex-nowrap align-items-center py-1 pe-2 navbar-pages-section'>
                        <ul className='d-flex list-unstyled font-small-medium'>
                            <li className='p-2'>
                                <Link to="/dashboard" className='dashboard-section-btn navbar-section-btn' id='dashboard-navbar-btn1' onClick={() => handleDashboardSectionBtn("dashboard-navbar-btn1")}>Dashboard</Link>
                            </li>
                            <li className='p-2'>
                                <Link to="/orders" className='navbar-section-btn' id='dashboard-navbar-btn2' onClick={() => handleDashboardSectionBtn("dashboard-navbar-btn2")}>Order</Link>
                            </li>
                            <li className='p-2'>
                                <Link to="holdings" className='navbar-section-btn' id='dashboard-navbar-btn3' onClick={() => handleDashboardSectionBtn("dashboard-navbar-btn3")}>Holdings</Link>
                            </li>
                            <li className='p-2'>
                                <Link to="positions" className='navbar-section-btn' id='dashboard-navbar-btn4' onClick={() => handleDashboardSectionBtn("dashboard-navbar-btn4")}>Positions</Link>
                            </li>
                            <li className='p-2'>
                                <Link to="bids" className='navbar-section-btn' id='dashboard-navbar-btn5' onClick={() => handleDashboardSectionBtn("dashboard-navbar-btn5")}>Bids</Link>
                            </li>
                            <li className='p-2'>
                                <Link to="funds" className='navbar-section-btn' id='dashboard-navbar-btn6' onClick={() => handleDashboardSectionBtn("dashboard-navbar-btn6")}>Funds</Link>
                            </li>
                        </ul>
                        <ul className='d-flex align-items-center list-unstyled'>
                            <li className='mx-4 cursor-pointer'>
                                <i className="fa-regular fa-bell navbar-section-btn"></i>
                            </li>
                            <li className='dropdown'>
                                <button type='button' className='bg-transparent border-0 d-flex' data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className='navbar-section-btn font-small d-flex cursor-pointer'>
                                        <img src="/images/zerodhaicon.png" className='rounded-circle me-2' height={"20"} alt="fdfd" />
                                        <p>DEMOUSER</p>
                                    </div>
                                </button>
                                <ul className="dropdown-menu navbar-buttons-dropdown">
                                    <li className='border-bottom p-2'>
                                        <p className='fs-5'>{user.username}</p>
                                        <p className='font-small-medium text-secondary'>{user.email}</p>
                                    </li>
                                    <li className="px-2 py-1 text-16 border-bottom text-secondary">
                                        <i className="fa-regular fa-user p-1"></i>My profile
                                        <span>/ Setting</span>
                                    </li>
                                    <li className='px-2 py-1 text-16 text-secondary'><i className="fa-solid fa-circle-notch p-1"></i> Console</li>
                                    <li className='px-2 py-1 text-16 border-bottom text-secondary'>
                                        <span className="p-1"><GroupAddOutlinedIcon className="fs-5" /></span>Invite friends
                                    </li>
                                    <li className='px-2 py-1 text-16 text-secondary'><i className="fa-regular fa-compass p-1"></i>Tour Kite</li>
                                    <li className='px-2 py-1 text-16 text-secondary'><i className="fa-regular fa-circle-question p-1"></i>User manual</li>
                                    <li className='px-2 py-1 text-16'>
                                        <LogoutBtn setLoginUser={setLoginUser} showToast={showToast}/>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <NavbarButtonsOption setLoginUser={setLoginUser} loginUser={user} showToast={showToast}/>
                </div>
            </div>
        </nav>
    )
}