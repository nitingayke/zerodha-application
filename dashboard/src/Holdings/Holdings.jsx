import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import HoldingStats from './HoldingStats';
import { VerticalGraph } from "../Charts/VerticalGraph";

export default function Holdings({holdings}) {
    const [searchHolding, setSearchHolding] = useState("");
    let [total, setTotal] = useState({ currentValue: 0, profitAndLoss: 0, netCharge: 0, dayCharge: 0 });

    let handleTotalSum = (currTotal) => {
        setTotal({ currentValue: currTotal.currentValue.toFixed(2), profitAndLoss: currTotal.profitAndLoss.toFixed(2), netCharge: currTotal.netCharge.toFixed(2), dayCharge: currTotal.dayCharge.toFixed(2) });
    }

    const labels = holdings.map((stock) => stock.Instrument);
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: holdings.map((stock) => stock.Avg_cost),
                backgroundColor: '#ff4500b0',
            }
        ]
    }
    const filterholdings = holdings.filter((stock) => stock.Instrument.toLowerCase().includes(searchHolding.toLowerCase()));

    return (
        <div className='col-12 holdings-section overflow-auto px-2'>
            <header className='pt-5 py-3 d-flex align-items-center justify-content-between border-bottom'>
                <div className='d-flex align-items-center'>
                    <p className='fs-5 text-muted me-3 '>Holdings({holdings.length})</p>

                    <div className="dropdown">
                        <button className="dropdown-toggle border rounded-0 px-2 text-secondary bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Stocks
                        </button>
                        <ul className="dropdown-menu p-2" disabled>
                            <li className="dropdown-item cursor-pointer">All stock</li>
                            <li className="dropdown-item cursor-pointer">Kite only</li>
                            <li className="dropdown-item cursor-pointer">Mutual funds</li>
                        </ul>
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <div className="input-group rounded-0 border p-1">
                        <span className="input-group-text text-secondary border-0" id="basic-addon1"><SearchIcon className='fs-6'/> </span>
                        <input value={searchHolding} onChange={(e) => setSearchHolding(e.target.value)} type="text" className="form-control font-small-medium text-secondary border-0 ps-2" placeholder="Search"/>
                    </div>
                    <ul className="font-small d-flex list-unstyled width-mid-none">
                        <li><a href="/" className="px-1 d-flex link-hover"><PeopleAltOutlinedIcon className='fs-6'/>Family</a></li>
                        <li>
                            <a href="/" className='link-hover d-flex align-items-center px-1'>
                                <img src="/images/console.svg" height={"11"} alt="" />
                                <p>Analitics</p>
                            </a>
                        </li>
                        <li><a href="/" className='px-1 d-flex link-hover'><ArrowCircleDownOutlinedIcon className='fs-6'/>Download</a></li>
                    </ul>
                </div>
            </header>
            <div>
                <ul className='list-unstyled d-flex justify-content-between mb-2'>
                    <li className="p-3">
                        <p className='font-small text-secondary'>Total investment</p>
                        <p className='fs-5 fw-medium'>{13228}.<span className='font-small'>55</span></p>
                    </li>
                    <li className="p-3">
                        <p className='font-small text-secondary'>Current value</p>
                        <p className='fs-5 fw-medium'>{total.currentValue}</p>
                    </li>
                    <li className="p-3">
                        <p className='font-small text-secondary'>Day's P&L</p>
                        <p className='fs-5 fw-medium text-green'>{35}.<span className='font-small'>70</span> <span className='font-small'>(+{0.23}%)</span></p>

                    </li>
                    <li className="p-3">
                        <p className='font-small text-secondary'>Total P&L</p>
                        <p className='fs-5 fw-medium text-green'>{total.profitAndLoss}<span className='font-small'>(+{19.13}%)</span></p>
                    </li>
                </ul>
                <HoldingStats holdings={filterholdings} handleTotalSum={handleTotalSum} total={total}/>
                <br />

                <VerticalGraph data={dataChart} />
                <br /><br />
            </div>
        </div>
    )
}