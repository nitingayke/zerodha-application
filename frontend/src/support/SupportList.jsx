import React from 'react';
import "./Support.css";

export default function SupportList({ list }){
    return(
        <>
            {
                list.map((data, idx) => <li key={idx} className='redirect-link ps-2 py-1 fs-16'>{data}</li>)
            }
       </>
    )
}