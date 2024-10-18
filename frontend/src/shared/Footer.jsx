import React from 'react';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import "./Shared.css";
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className='col-12 landing-footer px-2 py-3 mt-auto'>
            <div className='col-md-11 col-lg-10 col-12 mx-auto d-flex flex-wrap justify-content-between'>

                <div className='col-12 col-md-3 mb-5'>
                    <Link to={"/"}><img src="/assets/logo.svg" alt="" height={20} /></Link>
                    <p className='fs-14 fw-medium text-secondary my-2'>&copy; 2010 - {new Date().getFullYear()}, Zerodha Broking Ltd. All rights reserved.</p>

                    <ul className='list-unstyled d-flex m-0 text-secondary'>
                        <li className='px-2'><XIcon /></li>
                        <li className='px-2'><FacebookIcon /></li>
                        <li className='px-2'><InstagramIcon /></li>
                        <li className='px-2'><LinkedInIcon /></li>
                    </ul>
                    <hr />
                    <ul className='list-unstyled d-flex m-0 text-secondary'>
                        <li className='px-2'><YouTubeIcon /></li>
                        <li className='px-2'><WhatsAppIcon /></li>
                        <li className='px-2'><TelegramIcon /></li>
                    </ul>
                </div>

                <ul className="list-unstyled footer-helper-links col-md-3 fs-16">
                    <li className='text-dark fw-medium mb-1 fs-6'>Company</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Referral programme</li>
                    <li>Careers</li>
                    <li>Zerodha.tech</li>
                    <li>Press & media</li>
                    <li>Zerodha Cares (CSR)</li>
                </ul>

                <ul className="list-unstyled footer-helper-links col-md-3 fs-16">
                    <li className='text-dark fw-medium mb-1 fs-6'>Support</li>
                    <li>Contact us</li>
                    <li>Support portal</li>
                    <li>Z-Connect blog</li>
                    <li>List of charges</li>
                    <li>Downloads & resources</li>
                    <li>Videos</li>
                    <li>Market overview</li>
                    <li>How to file a complaint?</li>
                    <li>Status of your complaints</li>
                </ul>

                <ul className="list-unstyled footer-helper-links col-md-2 fs-14">
                    <li className='text-dark fw-medium mb-1 fs-6'>Account</li>
                    <li>Open an account</li>
                    <li>Fund transfer</li>
                </ul>

                <div className='col-12 my-3'>
                    <p className='fs-12 text-secondary fw-normal'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span className='gray-link fs-14 fw-medium'>complaints@zerodha.com</span>, for DP related to <span className='gray-link fs-14 fw-medium'>dp@zerodha.com</span>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p className='fs-12 text-secondary fw-normal'>Procedure to file a complaint on <span className='gray-link fs-14 fw-medium'>SEBI SCORES</span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p className='fs-12 text-secondary fw-normal'><span className='gray-link fs-14 fw-medium fw-medium'>Smart Online Dispute Resolution</span> | <span className='gray-link fs-14 fw-medium'>Grievances Redressal Mechanism</span></p>
                    <p className='fs-12 text-secondary fw-normal'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p className='fs-12 text-secondary fw-normal'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p className='fs-12 text-secondary fw-normal'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <span className='gray-link fs-14 fw-medium'>create a ticket here</span>.</p>
                </div>

                <ul className='list-unstyled footer-helper-links d-flex fs-16 justify-content-center flex-wrap'>
                    <li className='m-1'>NSE</li>
                    <li className='m-1'>BSE</li>
                    <li className='m-1'>MCX</li>
                    <li className='m-1'>Terms & conditions</li>
                    <li className='m-1'>Policies & procedures</li>
                    <li className='m-1'>Privacy policy</li>
                    <li className='m-1'>Disclosure</li>
                    <li className='m-1'>For investor's attention</li>
                    <li className='m-1'>Investor charter</li>
                </ul>

            </div>

        </footer>
    )
}