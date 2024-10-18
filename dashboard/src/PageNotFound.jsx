import { Link } from 'react-router-dom';
import React from 'react';

export default function PageNotFound() {
    return (
    <div className='mt-5 p-4 rounded col-11 mx-auto' style={{height: "fit-content", backgroundColor: "#8080802b"}}>
        <h1>404 Page Not Found</h1>
        <p className='text-secondary'>Sorry, the page are looking for does not exist..</p>
        <Link to="/dashboard" className='cursor-pointer'>dashboard</Link>
    </div> 
    )
}