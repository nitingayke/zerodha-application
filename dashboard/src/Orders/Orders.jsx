import React from 'react';
import UserOrders from './UserOrders';
import "./Orders.css";

export default function Orders({ showToast }){
    return (
        <div className="overflow-auto px-2 col-12">
            <header className="border-bottom">
                <ul className="list-unstyled d-flex text-16">
                    <li className="btn-hover p-2 section-link section-order-box">Orders</li>
                    <li className="btn-hover p-2 section-link">GTT</li>
                    <li className="btn-hover p-2 section-link">Baskets</li>
                    <li className="btn-hover p-2 section-link">SIP</li>
                    <li className="btn-hover p-2 section-link">Alerts</li>
                </ul>
            </header>
            <UserOrders showToast={showToast}/>

            <br /><br /><br />
        </div>
    )
}