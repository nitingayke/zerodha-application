import React from 'react';
import EastIcon from '@mui/icons-material/East';

export default function EcosystemComponent(){
    return (
        <div className='d-flex flex-wrap justify-content-between align-items-center py-5'>

            <div className='col-md-5 col-12'>
                <h2 className='fw-semibold mb-4 text-muted'>Trust with confidence</h2>
                
                <h4 className='fs-5 fw-normal'>Customer-first always</h4>
                <p className='lh-base fs-16 text-secondary'>That's why 1.5+ crore customers trust Zerodha with &#8377; 4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            
                <h4 className='fs-5 fw-normal'>No spam or gimmicks</h4>
                <p className='lh-base fs-16 text-secondary'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            
                <h4 className='fs-5 fw-normal'>The Zerodha universe</h4>
                <p className='lh-base fs-16 text-secondary'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>           
            
                <h4 className='fs-5 fw-normal'>Do better with money</h4>
                <p className='lh-base fs-16 text-secondary'>With initiatives like <span className='gray-link'>Nudge</span> and <span className='gray-link'>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>           
            
            </div>

            <div className='col-md-6 col-12 '>
                <img src="/assets/ecosystem.png" alt="" className='img-fluid p-5' />

                <div className='d-flex justify-content-between '>
                    <p className='gray-link fs-16 p-3 m-0'>Explore out products <EastIcon className='fs-14'/></p>
                    <p className='gray-link fs-16 p-3 m-0'>Try Kite demo <EastIcon className='fs-14'/></p>
                </div>
            </div>

            <img src="/assets/press-logos.png" alt="" className='img-fluid mx-auto py-4 px-md-3'/>
        </div>
    )
}