import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { VerticalGraph } from "../Charts/VerticalGraph";

export default function Auctions({ auctions }) {
    const [searchAuctions, setSearchAuctions] = useState("");
    const filterauctions = auctions.filter((stock) => stock.instrument.toLowerCase().includes(searchAuctions.toLowerCase()));

    const labels = auctions.map((stock) => stock.instrument);
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: auctions.map((stock) => stock.holdingPrice),
                backgroundColor: '#00d00094',
            }
        ]
    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h6 className='text-secondary my-3 my-auto'>Auctions(<span>{filterauctions.length}</span>)</h6>

                <div className="d-flex rounded-0 border p-1 col-4 my-3">
                    <span className="input-group-text text-secondary border-0" id="basic-addon1"><SearchIcon className='fs-6' /> </span>
                    <input value={searchAuctions} onChange={(e) => setSearchAuctions(e.target.value)} type="text" className="form-control font-small-medium text-secondary border-0 ps-2" placeholder="Search" />
                </div>
            </div>
            <table className='col-12'>
                <thead className='font-small-medium text-secondary  border-bottom sticky-top bg-white'>
                    <th className='fw-normal p-2'>Instrument</th>
                    <th className='fw-normal p-2 text-end'>Eligible Qty.</th>
                    <th className='fw-normal p-2 text-end'>Last price</th>
                    <th className='fw-normal p-2 text-end'>Holding price</th>
                    <th className='fw-normal p-2 text-end'>Holding P&L</th>
                    <th className='fw-normal p-2 text-end'>Auction no.</th>
                </thead>

                {filterauctions.map((order, idx) =>
                (<tr key={idx} className='border-bottom font-small-medium'>
                    <td className='p-2'>{order.instrument}</td>
                    <td className='p-2 text-end'>{order.eligibleQty}</td>
                    <td className='p-2 text-end'>{order.lastPrice}</td>
                    <td className='p-2 text-end'>{order.holdingPrice}</td>
                    <td className='p-2 text-end'>
                        {order.holdingPL > 0 ? <span className='text-green'>{order.holdingPL}</span> : <span className='text-red'>{order.holdingPL}</span>}
                    </td>
                    <td className='p-2 text-secondary text-end'>{order.auctionNo}</td>
                </tr>)
                )}
            </table>
            <br />
            <VerticalGraph data={dataChart} />
            <br /><br />
        </>
    )
}