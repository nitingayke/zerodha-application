import React from 'react';

export default function PricingCurrency() {
    return (
        <table className='border col-12 fs-14 text-secondary mt-4 my-5 hide' id='pricing-section2'>
            <thead>
                <tr className='border-bottom fw-semibold'>
                    <th></th>
                    <th>Currency Futures</th>
                    <th>Currency Options</th>
                </tr>
            </thead>
            <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
            </tr>
            <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
            </tr>
            <tr>
                <td>Transaction charges</td>
                <td>
                    NSE: Exchange txn charge: 0.00035%<br />
                    BSE: Exchange txn charge: 0.00045%
                </td>
                <td>
                    NSE: Exchange txn charge: 0.0311%<br />
                    BSE: Exchange txn charge: 0.001%
                </td>
            </tr>
            <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
            </tr>
            <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
        </table>
    )
}