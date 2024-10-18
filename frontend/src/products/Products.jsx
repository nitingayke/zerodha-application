import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ZerodhaUniverse from './ZerodhaUniverse';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

export default function Products() {
    return (
        <>
            <div className='text-center my-5 border-bottom pb-5'>
                <h1 className='fw-semibold text-muted'>Zerodha Products</h1>
                <p className='fs-5 text-secondary'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-16'>Check out our <span className='gray-link fw-medium'>investment offerings <ArrowRightAltIcon className='fs-6' /></span></p>
            </div>

            <LeftComponent imgUrl={"/assets/products-kite.png"}  header={"Kite"} aboutProduct={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}/>
            
            <RightComponent imgUrl={"/assets/products-console.png"} header={"Console"} aboutProduct={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} />

            <LeftComponent imgUrl={"/assets/products-coin.png"}  header={"Coin"} aboutProduct={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}/>
            
            <RightComponent imgUrl={"/assets/products-kiteconnect.png"} header={"Kite Connect API"} aboutProduct={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} />

            <LeftComponent imgUrl={"/assets/varsity-products.png"}  header={"Varsity mobile"} aboutProduct={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}/>

            <p className='fs-5 text-muted py-5 text-center'>Want to know more about our technology stack? Check out the <span className='fw-semibold gray-link'>Zerodha.tech</span> blog.</p>
            <section className='text-center border-top pt-5'>
                <h2 >The Zerodha Universe</h2>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='d-flex flex-wrap col-12 py-5'>
                    <ZerodhaUniverse imgUrl1={"/assets/zerodhafundhouse.png"} p1={"Our asset management venture that is creating simple and transparent index funds to help you save for your goals."} imgUrl2={"/assets/streak-logo.png"} p2={"Systematic trading platform that allows you to create and backtest strategies without coding."} />
                    <ZerodhaUniverse imgUrl1={"/assets/sensibull-logo.svg"} p1={"Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."} imgUrl2={"/assets/smallcase-logo.png"} p2={"Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."} />
                    <ZerodhaUniverse imgUrl1={"/assets/tijori.svg"} p1={"Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."} imgUrl2={"/assets/ditto-logo.png"} p2={"Personalized advice on life and health insurance. No spam and no mis-selling."} />
                </div>
            </section>

            <div className='col-12 text-center pb-5 pt-3'>
                <Link to={"/signup"} className='col-12'>
                    <Button variant="contained" className='hover-black'>Sign up for free</Button>
                </Link>
            </div>
        </>
    )
}