import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./Notification.css";
import axios from 'axios';

export default function SellStock({ stock, hideSellStockModal, showToast }) {
    const [stockPrice, setStockPrice] = useState(0.0);
    const [stockQuantity, setStockQuantity] = useState(0);

    let handleSellOrder = () => {
        axios.post("http://localhost:9920/newOrder", {
            name: stock.name,
            qty: stockQuantity,
            price: stockPrice,
            mode: "SELL",
            stock: stock,
        }).then(res => {
            showToast("Sell order placed successfully!");
        }).catch(error => {
            showToast("Error placing Sell order. Please try again."); 
        });
        hideSellStockModal();
        
    }
    return (
        <div className='modal-box position-absolute'>
            <header className='orangeRedbg p-2'>
                <p className='text-light single-line-visible fw-semibold'>{stock.name || "Error"}</p>
                <small className='text-light'>Qty: {stock.holdingQuantity}</small>
            </header>
            <div className='p-2'>
                <div className="input-group mb-2 col-12">
                    <input type="number" value={stockQuantity} onChange={((e) => setStockQuantity(e.target.value))} className="form-control p-2 rounded-0" placeholder="Qty" />
                    <span className="input-group-text px-2" id="basic-addon1"><i className="fa-solid fa-layer-group text-secondary"></i></span>
                </div>

                <div className="input-group mb-2">
                    <input type="number" value={stockPrice} onChange={((e) => setStockPrice(e.target.value))} className="form-control p-2 rounded-0" placeholder="Price" />
                </div>

                <div className='col-12 font-small-medium text-secondary'>
                    <span className='col-6 me-3'>Margin: &#8377;{(stock.price * stock.holdingQuantity).toFixed(2)}</span>
                    <span className='col-6'>Charges: &#8377;{ (stock.price*stock.holdingQuantity * (0.1+0.00345 + 0.015 + 0.0001)).toFixed(2) }</span>
                </div>
                <Button variant="contained" className='p-1 m-1 col-12 orangeRedbg' onClick={handleSellOrder}>Sell</Button>
                <Button variant="outlined" className='p-1 text-secondary border border-secondary m-1 col-12' onClick={hideSellStockModal}>Cancel</Button>

            </div>
        </div>
    )
}