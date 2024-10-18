import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "./LeftSidebar.css";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Tooltip from '@mui/material/Tooltip';
import { PieGraph } from '../Charts/PieGraph';
import SearchIcon from '@mui/icons-material/Search';

export default function WatchList({ watchList, showSellStockModal, showBuyStockModal }) {
    const [searchStock, setSearchStock] = useState('');

    let handleBuyStockModal = (stockdata) => {
        showBuyStockModal(stockdata);
    }
    let handleSellStockModal = (stockdata) => {
        showSellStockModal(stockdata);
    }

    const dataChart = {
        labels: watchList.map((stock) => (stock && stock.stockSymbol) ? stock.stockSymbol : stock.name),
        datasets: [
            {
                label: 'Stock Price',
                data: watchList.map((stock) => (stock && stock.price) ? stock.price : 0),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const handleSearchStock = (event) => {
        setSearchStock(event.target.value);
    }
    const filterWatchList = watchList.filter((stock) => stock.name.toLowerCase().includes(searchStock.toLowerCase()) || stock.stockSymbol.toLowerCase().includes(searchStock.toLowerCase()));
    
    return (
        <>
            <div className="input-group p-2 text-secondary font-small-medium border-bottom">
                <span className=" border-0" id="basic-addon1"><SearchIcon className='fs-5' /></span>
                <input type="text" value={searchStock} onChange={handleSearchStock} className="form-control border-0 fw-normal font-small-medium ps-1" placeholder="Search (infy bse, nifty fut, etc)" aria-label="Username" />
                <span className=''>{filterWatchList.length} / {watchList.length}</span>
            </div>

          
            <section className='border-bottom watch-list-section'>

                {filterWatchList.length > 0 && filterWatchList.map((data, idx) => (
                    <div className='border-bottom p-2 d-flex align-items-center justify-content-between watch-list-stock cursor-pointer' key={idx}>
                        <div className='d-flex align-items-center'>
                            <p className='fs-6 trade-name'>
                                {data.isDown ? <span className='text-red max-width-15'>{data.name}</span> : <span className='text-green max-width-15'>{data.name}</span>}
                            </p>
                            {!data.isDown && <span className=' ps-2 font-small-medium fw-medium d-flex light-gray '>{data.holdingQuantity} <BusinessCenterIcon className='fs-6' /></span>}
                        </div>

                        <div className='font-small-medium fw-medium d-flex align-items-center'>
                            <span className='light-gray ps-2'>{data.priceAbsolute.toFixed(2)}</span>
                            <span className='text-secondary ps-2'>{data.pricePercentage.toFixed(2)}</span>
                            {data.isDown ? <span><ArrowDropDownIcon className='text-red ps-1' /></span> : <span><ArrowDropUpIcon className='text-green ps-1' /></span>}
                            {data.isDown ? <span className='text-red ps-1'>{data.price.toFixed(2)}</span> : <span className='text-green ps-1'>{data.price.toFixed(2)}</span>}
                        </div>

                        <div className='watchlist-option-buttons'>

                            <Tooltip title="Buy (B)" placement='top'>
                                <button className='bg-primary border-0' onClick={() => handleBuyStockModal(data)}><p>B</p></button>
                            </Tooltip>
                            <Tooltip title="Sell (S)" placement="top">
                                <button className='bg-orangered border-0' onClick={() => handleSellStockModal(data)}><p>S</p></button>
                            </Tooltip>
                            <Tooltip title="Market Depth (D)" placement="top">
                                <button><FormatAlignCenterOutlinedIcon className='fs-6' /></button>
                            </Tooltip>
                            <Tooltip title="Chart (C)" placement="top">
                                <button><MovingOutlinedIcon className='fs-5' /></button>
                            </Tooltip>
                            <Tooltip title="Delete (del)" placement="top">
                                <button><DeleteOutlineIcon className='fs-5' /></button>
                            </Tooltip>
                            <Tooltip title="More" placement="top">
                                <button><MoreHorizIcon className='fs-5' /></button>
                            </Tooltip>
                        </div>

                    </div>
                ))}

                <br />
                <PieGraph data={dataChart} />

                <br /><br />
            </section >
        </>
    )
}
