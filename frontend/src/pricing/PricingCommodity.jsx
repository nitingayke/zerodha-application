import React from 'react';
import "./Pricing.css";

export default function PricingCommodity() {
    return (
        <table className='border col-12 fs-16 text-secondary mt-4 my-5' id='pricing-section3'>
            <thead>
                <tr className='border-bottom fw-semibold'>
                    <th>Service</th>
                    <th>Commodity Futures</th>
                    <th>Commodity Options</th>
                </tr>
            </thead>
            <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
            </tr>
            <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
            </tr>
            <tr>
                <td>Transaction charges</td>
                <td>
                    Group A: Exchange txn charge: 0.0021%<br />
                    Group B:<br />
                    CASTORSEED: 0.0005%<br />
                    KAPAS: 0.0026%<br />
                    PEPPER: 0.00005%<br />
                    RBDPMOLEIN: 0.001%
                </td>
                <td>Exchange txn charge: 0.0418%</td>
            </tr>
            <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
                <td>SEBI charges</td>
                <td>Agri: ₹1 / crore<br />Non-Agri: ₹10 / crore</td>
                <td>₹10 / crore</td>
            </tr>
            <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
        </table>

    )
}