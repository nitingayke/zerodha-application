import React from 'react';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Equity_Commodity({ equity, commodity }) {
    return (
        <div className='d-flex flex-wrap justify-content-evenly'>
            <div className='col-12 col-md-5'>
                <div className='d-flex justify-content-between col-12 py-3'>
                    <span className="text-secondary">
                        <i className="fa-solid fa-chart-pie"></i>
                        <span className="px-2">Equity</span>
                    </span>
                    <span className='font-small d-flex align-items-center'>
                        <a href="/" className='link-hover d-flex align-items-center'>
                            <img src="/images/console.svg" height={"11"} alt="" />
                            <p>View statement</p>
                        </a>
                        <a href="/" className='d-flex link-hover ps-1'>
                            <InfoOutlinedIcon className='fs-5 px-1' />
                            <p>Help</p>
                        </a>
                    </span>
                </div>
                <ul className='border p-2 list-unstyled funds-list-data'>
                    <li><span>Available margin</span><span className='fs-3 text-primary'>{(100000.22).toLocaleString("en-IN") }</span></li>
                    <li><span>Used margin</span><span className='fs-3'>0.00</span></li>
                    <li><span>Abailable cash</span><span className='fs-3'>{(100000.12).toLocaleString("en-IN") }</span></li>
                    <hr />
                    <li><span>Opening balance</span><span>{(100000.00).toLocaleString("en-IN")}</span></li>
                    <li><span>Payin</span><span>0.00</span></li>
                    <li><span>Payout</span><span>0.00</span></li>
                    <li><span>SPAN</span><span>0.00</span></li>
                    <li><span>Delivery margin</span><span>0.00</span></li>
                    <li><span>Exposure</span><span>0.00</span></li>
                    <li><span>Options premium</span><span>0.00</span></li>
                    <hr />
                    <li><span>Collateral (Liquid funds)</span><span>0.00</span></li>
                    <li><span>Collateral (Equity)</span><span>0.00</span></li>
                    <li><span>Total collateral</span><span>0.00</span></li>
                </ul>
            </div>
            <div className='col-12 col-md-5'>
                <div className='d-flex justify-content-between col-12 py-3'>
                    <span className="text-secondary d-flex align-items-center">
                        <WaterDropOutlinedIcon className='fs-5' />
                        <span>Commodity</span>
                    </span>
                    <span className='font-small d-flex align-items-center'>
                        <a href="/" className='link-hover d-flex align-items-center'>
                            <img src="/images/console.svg" height={"11"} alt="" />
                            <p>View statement</p>
                        </a>
                        <a href="/" className='d-flex link-hover ps-1'>
                            <InfoOutlinedIcon className='fs-5 px-1' />
                            <p>Help</p>
                        </a>
                    </span>
                </div>
                <ul className='border p-2 list-unstyled funds-list-data'>
                    <li><span>Available margin</span><span className='fs-3 text-primary'>{(50000.00).toLocaleString("en-IN")}</span></li>
                    <li><span>Used margin</span><span className='fs-3 '>0.00</span></li>
                    <li><span>Abailable cash</span><span className='fs-3 '>{(50000.00).toLocaleString("en-IN")}</span></li>
                    <hr /> 
                    <li><span>Opening balance</span><span>{(50000.00).toLocaleString("en-IN")}</span></li>
                    <li><span>Payin</span><span>0.00</span></li>
                    <li><span>Payout</span><span>0.00</span></li>
                    <li><span>SPAN</span><span>0.00</span></li>
                    <li><span>Delivery margin</span><span>0.00</span></li>
                    <li><span>Exposure</span><span>0.00</span></li>
                    <li><span>Options premium</span><span>0.00</span></li>
                </ul>
            </div>
        </div>
    )
}