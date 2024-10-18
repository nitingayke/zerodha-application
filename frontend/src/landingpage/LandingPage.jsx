import React from 'react';
import "./LandingPage.css";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import EcosystemComponent from './EcosysteComponent';
import EastIcon from '@mui/icons-material/East';
import MarketEducation from './MarketEducation';
import SignupOption from '../shared/SignupOption';

export default function LandingPage() {
    return (
        <>
            <section className='py-5 text-center'>
                <img src="/assets/landing.png" alt="" className='img-fluid col-md-8 col-9 mx-auto' />

                <h1 className='pt-5 landing-thought text-muted'>Invest in everyting</h1>
                <p className='text-muted fs-5 pb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to={"/signup"}>
                    <Button variant="contained" className='hover-black'>Sign up for free</Button>
                </Link>
            </section>

            <EcosystemComponent />

            <div className='d-flex flex-wrap justify-content-between align-items-center py-5'>
                <div className='col-md-5 col-12'>
                    <h2 className='fw-semibold mb-4 text-muted'>Unbeatable pricing</h2>
                    <p className='lh-base fs-16 text-secondary m-0'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <p className='gray-link fs-16 py-3 m-0'>See pricing <EastIcon className='fs-14' /></p>
                </div>

                <div className='col-md-6 col-12 d-flex flex-wrap justify-content-between'>

                    <div className='d-flex align-items-center'>
                        <img src="/assets/pricing0-eq.svg" alt="" className='img-fluid' width={90} />
                        <p className='fs-12 m-0'>Free account <br /> opening</p>
                    </div>

                    <div className='d-flex align-items-center col-12 col-md-6'>
                        <img src="/assets/pricing0-eq.svg" alt="" className='img-fluid' width={90} />
                        <p className='fs-12 m-0'>Free equity delivery <br /> and direct mutual funds</p>
                    </div>

                    <div className='d-flex align-items-center col-12'>
                        <img src="/assets/other-trades20.svg" alt="" className='img-fluid' width={90} />
                        <p className='fs-12 m-0'>Intraday and <br /> F&O</p>
                    </div>
                </div>
            </div>

            <MarketEducation />
            <SignupOption/>
        </>
    )
}