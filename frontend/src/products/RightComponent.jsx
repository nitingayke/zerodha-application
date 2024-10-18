import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function RightComponent({ imgUrl, header, aboutProduct }) {
    return (
        <section className='pt-5 pb-4 d-flex flex-wrap col-12 justify-content-between align-items-center'>
            <div className='col-12 col-md-4'>
                <h2 className='fw-semibold py-3'>{header}</h2>
                <p className='lh-lg text-secondary'>{aboutProduct}</p>


                <p className='gray-link fs-16'>{header} <ArrowRightAltIcon className='fs-16'/></p>
            </div>
            <div className='col-12 col-md-7'>
                <img src={imgUrl} alt="" className='img-fluid p-5' />
            </div>
        </section>
    )
}