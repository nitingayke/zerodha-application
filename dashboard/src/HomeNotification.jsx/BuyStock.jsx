import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./Notification.css";
import axios from 'axios';

export default function BuyStock({ stock, hideBuyStockModal, showToast }) {
    const [stockPrice, setStockPrice] = useState(0.0);
    const [stockQuantity, setStockQuantity] = useState(0);

    let handleBuyOrder = () => {
        axios.post("http://localhost:9920/newOrder", {
            name: stock.name,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY",
            stock: stock,
        }).then((res => {
            showToast("Buy order placed successfully!");
        })).catch(error => {
            showToast("Error placing Buy order. Please try again.");
        });
        hideBuyStockModal();
    }

    return (
        <div className='modal-box position-absolute'>
            <header className='bg-primary p-2'>
                <p className='text-light single-line-visible fw-semibold'>{stock.name || "Not Found"}</p>
                <small className='text-light'>Qty: {stock.holdingQuantity}</small>
            </header>
            <div className='p-2'>

                <div class="input-group mb-2 col-12">
                    <input type="number" onChange={((e) => setStockQuantity(e.target.value))} value={stockQuantity} class="form-control p-2 rounded-0" placeholder="Qty" />
                    <span class="input-group-text px-2" id="basic-addon1"><i class="fa-solid fa-layer-group text-secondary"></i></span>
                </div>

                <div class="input-group mb-2">
                    <input type="number" onChange={((e) => setStockPrice(e.target.value))} value={stockPrice} class="form-control p-2 rounded-0" placeholder="Price" />
                </div>

                <div className='col-12 font-small-medium text-secondary'>
                    <span className='col-6 me-3'>Margin: &#8377;{(stock.price * stock.holdingQuantity).toFixed(2)}</span>
                    <span className='col-6'>Charges: &#8377;{(stock.price * stock.holdingQuantity * (0.1 + 0.00345 + 0.015 + 0.0001)).toFixed(2)}</span>
                </div>
                <Button variant="contained" className='p-1 col-12 mt-2' onClick={handleBuyOrder}>Buy</Button>
                <Button variant="outlined" className='p-1 text-secondary border border-secondary col-12 mt-2' onClick={hideBuyStockModal}>Cancel</Button>
            </div>
        </div>
    )
}