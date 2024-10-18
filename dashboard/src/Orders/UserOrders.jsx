import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { VerticalGraph } from '../Charts/VerticalGraph';

export default function UserOrders({ showToast }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9920/getOrders", {timeout: 5000}).then((res) => {
            setOrders(res.data);
        }).catch(() => {
            showToast("Error fetching user order. Please try again.");
        });

    }, []);

    const labels = orders.map((stock) => stock.name);
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: orders.map((stock) => stock.price),
                backgroundColor: '#00d200d1',
            }
        ]
    }
    return (
        <>
            <h6 className='text-secondary my-3'>Open orders (<span>{orders.length}</span>)</h6>
            <table className='col-12'>
                <thead className='font-small-medium text-secondary  border-bottom sticky-top bg-white'>
                    <th><input type="checkbox" /></th>
                    <th className='fw-normal p-2'>Time</th>
                    <th className='fw-normal p-2'>Type</th>
                    <th className='fw-normal p-2'>Instrument</th>
                    <th className='fw-normal p-2'>Qty.</th>
                    <th className='fw-normal p-2'>Price</th>
                    <th className='fw-normal p-2'>Status</th>
                </thead>

                {orders.map((order, idx) =>
                (<tr key={idx} className='border-bottom font-small-medium'>
                    <td><input type="checkbox" disabled /></td>
                    <td className='p-2'>{order.createdAt.toString().substring(0, 10)}</td>
                    <td className='p-2'>{(order.mode === "BUY" ? <span className='order-mode-buy'>BUY</span> : <span className='order-mode-sell'>SELL</span>)}</td>
                    <td className='p-2'>{order.name}</td>
                    <td className='p-2'>{order.qty}</td>
                    <td className='p-2'>{order.price}</td>
                    <td className='p-2'><span className='open-box'>OPEN</span></td>
                </tr>)
                )}
            </table>

            <VerticalGraph data={dataChart}/>

        </>
    )
}