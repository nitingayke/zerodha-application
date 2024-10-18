import React from 'react';
import EastIcon from '@mui/icons-material/East';

export default function MarketEducation() {
    return (
        <div className='d-flex flex-wrap justify-content-between align-items-center py-5'>
            <div className='col-md-5 col-12 '>
                <img src="/assets/index-education.svg" alt="" className='img-fluid p-3' />
            </div>
            <div className='col-md-6'>
                <h2 className='fw-semibold my-4 text-muted'>Trust with confidence</h2>

                <p className='lh-base fs-16 text-secondary'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <p className='gray-link fs-16 mb-5'>Varsity <EastIcon className='fs-14'/></p>

                <p className='lh-base fs-16 text-secondary'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <p className='gray-link fs-16 m-0'>TrandingQ&A <EastIcon className='fs-14'/></p>
            </div>
        </div>
    )
}