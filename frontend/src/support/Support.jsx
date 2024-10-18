import React from 'react';
import "./Support.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import SupportList from './SupportList';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Support() {
    return (
        <>
            <div className='bg-primary px-3 py-4'>
                <div className='d-flex justify-content-between text-light'>
                    <p className='fw-bold fs-5'>Support Portal</p>
                    <p className='border-bottom'>Track tickets</p>
                </div>

                <div className='d-flex flex-wrap text-light'>
                    <div className='col-12 col-md-7'>
                        <p className='fs-5 fw-medium py-3'>Search for an answer or browse help topics to create a ticket</p>

                        <div class="input-group support-input-box mb-3">
                            <input type="text" class="form-control p-2 border-0 fs-16 pe-0" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
                            <span class="input-group-text text-secondary" id="basic-addon1"><SearchIcon /></span>
                        </div>

                        <ul className='d-flex flex-wrap list-unstyled'>
                            <li className='py-2 mx-2 border-bottom'>
                                <Link to={"/signup"} className='text-light'>
                                    Track account opening
                                </Link>
                            </li>
                            <li className='py-2 mx-2 border-bottom'>Track segment activation</li>
                            <li className='py-2 mx-2 border-bottom'>Intraday margins</li>
                            <li className='py-2 mx-2 border-bottom'>Kite user manual</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-5'>
                        <p className='fw-bold fs-5'>Featured</p>

                        <ol>
                            <li>
                                <p className=''>Suspension of trading - IDFC Limited</p>
                            </li>
                            <li>
                                <p className=''>Rights Entitlements listing in October 2024</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <p className='fs-5 text-secondary py-3'>To create a ticket, select a relevant topic</p>

            <div className='d-flex flex-wrap justify-content-between'>
                <ul className='list-unstyled col-12 col-md-4 p-3 blue-link'>
                    <li className='py-3 d-flex align-items-center'><ControlPointIcon className='fs-5 m-1'/>Account Opening</li>
                    <SupportList list={["Getting started", "Online", "Offline", "Charges", "Company, Partnership and HUF", "Non Resident Indian (NRI)"]} />
                </ul>
                <ul className='list-unstyled col-12 col-md-4 p-3 blue-link'>
                    <li className='py-3 d-flex align-items-center'><PersonOutlineIcon className='fs-5 m-1'/>Your Zerodha Account</li>
                    <SupportList list={["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID", "Nomination", "Transfer and conversion of shares"]} />
                </ul>
                <ul className='list-unstyled col-12 col-md-4 p-3 blue-link'>
                    <li className='py-3 d-flex align-items-center'><i className="fa-solid fa-chart-line m-1"></i> Trading and Markets</li>
                    <SupportList list={["Trading FAQs", "Kite", "Margins", "Product and order types", "Corporate actions", "Kite features"]} />
                </ul>
                <ul className='list-unstyled col-12 col-md-4 p-3 blue-link'>
                    <li className='py-3 d-flex align-items-center'><PersonOutlineIcon className='fs-5 m-1'/>Funds</li>
                    <SupportList list={["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"]} />
                </ul>
                <ul className='list-unstyled col-12 col-md-4 p-3 blue-link'>
                    <li className='py-3 d-flex align-items-center'><DashboardIcon className='fs-5 m-1'/>Console</li>
                    <SupportList list={["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"]} />
                </ul>
                <ul className='list-unstyled col-12 col-md-4 p-3 blue-link'>
                    <li className='py-3 d-flex align-items-center '><i className="fa-solid fa-coins m-1"></i>Coin</li>
                    <SupportList list={["Understanding mutual funds and Coin", "Coin app", "Coin web", "Transactions and reports", "National Pension Scheme (NPS)"]} />
                </ul>
            </div>
        </>
    )
}