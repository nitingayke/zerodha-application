import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Orders from './Orders/Orders';
import Holdings from './Holdings/Holdings';
import Position from './Positions/Positions';
import Bids from './Bids/Bids';
import Funds from './Funds/Funds';
import LeftSidebarHome from './LeftSidebar/LeftSidebarHome';
import BuyStock from './HomeNotification.jsx/BuyStock';
import SellStock from './HomeNotification.jsx/SellStock';
import { Routes, Route } from "react-router-dom";
import './index.css';
import MarketWatch from './MarketWatch.jsx/MarketWatch';
import PageNotFound from './PageNotFound';
import Navbar from './TopNavbar/Navbar';
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function HomePageComp() {
    const [isBuyModalVisible, setBuyModalVisible] = useState(false);
    const [isSellModalVisible, setSellModalVisible] = useState(false);

    const [selectedStock, setSelectedStock] = useState();
    const [holdings, setHoldings] = useState([]);
    const [positions, setPositions] = useState([]);
    const [auctions, setAuctions] = useState([]);
    const [stocks, setStocks] = useState([]);

    const [user, setUser] = useState({});
    const setLoginUser = (user) => {
        setUser(user);
    }

    const showBuyStockModal = (stockData) => {
        setSelectedStock(stockData);
        setBuyModalVisible(true);
    };

    const showSellStockModal = (stockData) => {
        setSelectedStock(stockData);
        setSellModalVisible(true);
    };

    const hideBuyStockModal = () => {
        setBuyModalVisible(false);
    }
    const hideSellStockModal = () => {
        setSellModalVisible(false);
    }

    const showToast = (message) => {
        toast(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    useEffect(() => { // axios =>  It simplifies tasks like fetching data, posting data, or interacting with APIs
        axios.get("http://localhost:9920/allHoldings").then((res) => {
            setHoldings(res.data);
        }).catch((error) => {
            toast.error("Error fetching holdings. Please try again.");
        });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:9920/allPositions").then((res) => {
            setPositions(res.data);
        }).catch((error) => {
            toast.error("Error fetching positions. Please try again.");
        });

    }, []);

    useEffect(() => {
        axios.get("http://localhost:9920/auctionData").then((res) => {
            setAuctions(res.data);
        }).catch((error) => {
            toast.error("Error fetching auction data. Please try again.");
        });

    }, []);

    useEffect(() => {
        axios.get("http://localhost:9920/stockdata").then((res) => {
            if (res.data.length > 0 && res.data[0]) {
                setStocks(res.data);
            }
        });
    }, []);

    return (
        <>
            <Navbar setLoginUser={setLoginUser} user={user} showToast={showToast} />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <div className='d-flex col-12 col-lg-11 mx-auto home-box'>
                <LeftSidebarHome showSellStockModal={showSellStockModal} showBuyStockModal={showBuyStockModal} stocks={stocks}/>

                <div className='d"-flex home-sections'>
                    <Routes>
                        <Route path="/orders" element={<Orders showToast={showToast} />} />
                        <Route path="/holdings" element={<Holdings holdings={holdings} />} />
                        <Route path="/positions" element={<Position positions={positions} />} />
                        <Route path="/bids" element={<Bids auctions={auctions} />} />
                        <Route path="/funds" element={<Funds />} />
                        <Route path='/marketwatch' element={<MarketWatch showSellStockModal={showSellStockModal} showBuyStockModal={showBuyStockModal}  stock={stocks}/>} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    {isBuyModalVisible && <BuyStock stock={selectedStock} hideBuyStockModal={hideBuyStockModal} showToast={showToast} />}
                    {isSellModalVisible && <SellStock stock={selectedStock} hideSellStockModal={hideSellStockModal} showToast={showToast} />}
                </div>
            </div>

        </>
    )
}