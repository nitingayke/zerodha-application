import React from 'react';

export default function ZerodhaUniverse({ imgUrl1, p1, imgUrl2, p2 }) {
    return (
        <div className='col-12 col-md-4 '>
            <div className='px-5 py-3'>
                <img src={imgUrl1} alt="" className='p-4' style={{ width: "100%" }} />
                <p className='fs-14 text-secondary'>{p1}</p>
            </div>
            <div className='px-5 py-3'>
                <img src={imgUrl2} alt="" className='p-4' style={{ width: "100%" }} />
                <p className='fs-14 text-secondary'>{p2}</p>
            </div>
        </div>
    )
}