import React from 'react';
import Button from '@mui/material/Button';
import Equity_Commodity from './Equity_Commodity';
import "./Funds.css";


export default function Funds() {
    return (
        <div className='col-12 overflow-auto px-2'>
            <header className='d-flex align-items-center justify-content-end flex-wrap text-center'>
                <div className='d-flex align-items-center pe-4 py-4'>
                    <p className='text-secondary font-small-medium fw-medium pe-2'>Instant, zero-cost fund transfers with </p>
                    <img src="/images/UPI.svg" alt="" height={"9"} />
                </div>
                <Button variant="contained" className='p-1' style={{backgroundColor:"rgb(61 190 61)"}}>Add funds</Button>
                &nbsp;
                <Button variant="contained" className='p-1'>withdraw</Button>
            </header>

            <Equity_Commodity/>

            <br /><br /><br />
        </div>
    )
}