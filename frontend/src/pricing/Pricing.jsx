import React, { useState } from 'react';
import "./Pricing.css";
import Button from '@mui/material/Button';
import PricingEquity from './PricingEquity';
import PricingCurrency from './PricingCurrency';
import PricingCommodity from './PricingCommodity';

export default function Pricing() {
    const [pricingVisible, setPricingVisible] = useState('1');

    const handlePricingSection = (e) => {
        let id = e.target.id;
        if(id === pricingVisible){
            return ;
        }

        document.getElementById(`pricing-section${pricingVisible}`).classList.add("hide");
        document.getElementById(`pricing-section${id}`).classList.remove("hide");
        setPricingVisible(id);
        
        document.getElementById(pricingVisible).classList.remove("selected-section");
        e.target.classList.add("selected-section");
    };
    return (
        <>
            <div className='py-5 text-center pricing-header'>
                <h1 className='text-muted'>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>

            <section className='col-12 text-center d-flex flex-wrap'>
                <div className='col-12 col-md-4 p-3'>
                    <img src="/assets/pricing0-eq.svg" alt="" className="px-lg-5 px-3 px-mx-4" />
                    <h3 className='fs-3 fw-semibold text-muted'>Free equity delivery</h3>
                    <p className='fs-16 text-secondary p-3'>All equity delivery investments (NSE, BSE), are absolutely free — &#8377; 0 brokerage.</p>
                </div>

                <div className='col-12 col-md-4 p-3'>
                    <img src="/assets/other-trades20.svg" alt="" className="px-lg-5 px-3 px-mx-4" />
                    <h3 className='fs-3 fw-semibold text-muted'>Intraday and F&O trades</h3>
                    <p className='fs-16 text-secondary p-3'>Flat &#8377; 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat &#8377;20 on all option trades.</p>
                </div>

                <div className='col-12 col-md-4 p-3'>
                    <img src="/assets/pricing0-eq.svg" alt="" className="px-lg-5 px-3 px-mx-4" />
                    <h3 className='fs-3 fw-semibold text-muted'>Free direct MF</h3>
                    <p className='fs-16 text-secondary p-3'>All direct mutual fund investments are absolutely free — &#8377; 0 commissions & DP charges.</p>
                </div>
            </section>

            <div className='col-12 border-bottom mb-4'>
                <ul className='list-unstyled d-flex pricing-section-link m-0'>
                    <li>
                        <p className="m-0 selected-section" onClick={handlePricingSection} id='1'>Equity</p>
                    </li>
                    <li>
                        <p className="m-0" onClick={handlePricingSection} id='2'>Currency</p>
                    </li>
                    <li>
                        <p className="m-0" onClick={handlePricingSection} id='3'>Commodity</p>
                    </li>
                </ul>
            </div>

            <PricingEquity />
            <PricingCurrency />
            <PricingCommodity />

            <h2 className='fs-3 text-muted'>Charges for account opening</h2>
            <table className='border col-12 fs-16 text-secondary mt-4 my-5'>
                <thead>
                    <tr className='border-bottom fw-semibold'>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tr>
                    <td>Online account</td>
                    <td>
                        <Button variant="contained" color="success" size="small">
                            Free
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>Offline account</td>
                    <td>
                        <Button variant="contained" color="success" size="small">
                            Free
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>NRI account (offline only)</td>
                    <td>
                        &#8377; &nbsp; 500
                    </td>
                </tr>
                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>
                        &#8377; &nbsp; 500
                    </td>
                </tr>
            </table>

            <h2 className='fs-3 text-muted pt-4'>Charges for optional value added services</h2>
            <table className='border col-12 fs-16 text-secondary mt-4 my-5'>
                <thead>
                    <tr className='border-bottom fw-semibold'>
                        <th>Service</th>
                        <th>Billing Frequency</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>
                        Free: &#8377; 0 | Pro: &#8377; 249 (Monthly) / &#8377; 2399 (Annual)
                    </td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>
                        Buy & Invest More: &#8377; 100 | SIP: &#8377; 10
                    </td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>
                        Connect: &#8377; 2000 | Historical: &#8377; 2000
                    </td>
                </tr>
            </table>

        </>
    )
}