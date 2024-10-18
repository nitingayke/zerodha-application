import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function LeftComponent({ imgUrl, header, aboutProduct }){
    return (
        <section className=' d-flex flex-wrap col-12 justify-content-between align-items-center'>
            <div className='col-12 col-md-7'>
                <img src={imgUrl} alt="" className='img-fluid p-5' />
            </div>
            <div className='col-12 col-md-4'>
                <h2 className='fw-semibold py-3'>{header}</h2>
                <p className='lh-lg text-secondary'>{aboutProduct}</p>

                <div className='col-12 d-flex flex-wrap fs-16'>
                    <span className='gray-link pe-4'>{header} <ArrowRightAltIcon className='fs-16'/></span>
                    <span className='gray-link'>Lern more<ArrowRightAltIcon className='fs-16'/></span>
                </div>
                <div className='py-3'>
                    <img src="/assets/google-play-badge.svg" alt="" className='pe-2 hover-opacity' />
                    <img src="/assets/appstore-badge.svg" alt="" className='hover-opacity'/>
                </div>
            </div>
        </section>
    )
}