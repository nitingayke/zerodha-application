import React from 'react';
import "./Shared.css";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function SignupOption() {
    return (
        <div className='text-center py-5'>
            <h1 className='fs signup-option-header text-muted'>Open a Zerodha account</h1>
            <p className='fs-5 text-secondary py-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

            <Link to={"/signup"}>
                <Button variant="contained" className='hover-black'>Sign up for free</Button>
            </Link>
        </div>
    )
}