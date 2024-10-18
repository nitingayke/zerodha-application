import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AboutTeam({ imgUrl, name, position, about }) {
    return (
        <div className='col-12 col-md-4 p-2 text-center'>
            <img src={imgUrl} alt="" className='rounded-circle col-8 p-5 p-md-3 col-lg-9 col-md-11' />
            <p className='text-muted m-0'>{name}</p>
            <p className='text-secondary fs-16'>{position}</p>

            <button className="border-0 bg-transparent fs-16 text-muted" type="button" data-bs-toggle="collapse" data-bs-target={`#${name.replace(/\s+/g, "")}`} >
                Bio<KeyboardArrowDownIcon/>
            </button>
            <div className="collapse" id={name.replace(/\s+/g, "")}>
                <div className="card card-body border-0 fs-16">
                    {about}
                </div>
            </div>
        </div>
    )
}