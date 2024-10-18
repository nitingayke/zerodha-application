import React, {useState, useEffect} from 'react';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import axios from 'axios';
import "../index.css";
import "./Dashboard.css";

export default function Dashboard() {
    let [holdings, setHoldings] = useState([]);

    useEffect(() => { // axios =>  It simplifies tasks like fetching data, posting data, or interacting with APIs
        axios.get("http://localhost:9920/allHoldings").then((res) => {
            setHoldings(res.data);
        });
    }, []);

    return (
        <div className="col-12 overflow-auto px-2">
            <div className='border-bottom py-3'>
                <span className='fs-3 text-secondary'>Hi, User</span>
            </div>
            <div className='d-flex flex-wrap border-bottom pb-4'>
                <div className='col-12 col-md-6 pt-4'>
                    <div className="text-secondary">
                        <i className="fa-solid fa-chart-pie"></i>
                        <span className="px-2">Equity</span>
                    </div>
                    <div className='d-flex'>
                        <div className='text-secondary border-end col-5'>
                            <p className="fs-1">1L</p>
                            <p className='font-small'>Margin available</p>
                        </div>
                        <div className='font-small text-secondary p-2 lh-lg'>
                            <p>Margins used <span className='text-dark'>0</span></p>
                            <p>Opening balance <span className='text-dark'>1L</span></p>
                            <a href="/" className='link-hover d-flex align-items-center'>
                                <img src="/images/console.svg" height={"11"} alt="" />
                                <p>View statement</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-6 pt-4'>
                    <div className="text-secondary d-flex align-items-center">
                        <WaterDropOutlinedIcon className='fs-5' />
                        <span>Commodity</span>
                    </div>
                    <div className='d-flex'>
                        <div className='text-secondary border-end col-5'>
                            <p className="fs-1">50K</p>
                            <p className='font-small'>Margin available</p>
                        </div>
                        <div className='font-small text-secondary p-2 lh-lg'>
                            <p>Margins used <span className='text-dark'>0</span></p>
                            <p>Opening balance <span className='text-dark'>50K</span></p>
                            <a href="/" className='link-hover d-flex align-items-center'>
                                <img src="/images/console.svg" height={"11"} alt="" />
                                <p>View statement</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4'>
                <h6 className='text-secondary d-flex fw-normal py-3'><BusinessCenterOutlinedIcon className='fs-5' />&nbsp;&nbsp;<span>Holdings</span> &nbsp;({holdings.length})</h6>
                <div className='d-flex '>
                    <div className='col-6 p-2 border-end'>
                        <p>
                            <span className='text-green fs-1 fw-light'>2.24K</span>
                            <span className='text-green fw-light'>+16.90%</span>
                        </p>
                        <p className='font-small text-secondary'>P&L</p>
                    </div>
                    <div className='col-4 px-2 text-16'>
                        <p className='py-2 d-flex justify-content-between'>
                            <span className='text-secondary'>Current value</span>
                            <span>15.46k</span>
                        </p>
                        <p className='py-2 d-flex justify-content-between'>
                            <span className='text-secondary'>Investment</span>
                            <span>13.23k</span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}