import React, { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { VerticalGraph } from '../Charts/VerticalGraph';

export default function PositionDataSection({ positions, daysHistory }) {
    
    let [total, setTotal] = useState({position_PL: 0, dayHistory_PL: 0});
    
    useEffect(() => {
        let totalPL1 = positions.reduce((sum, element) => sum + parseFloat(element.P_L), 0);
        let totalPL2 = daysHistory.reduce((sum, element) => sum + parseFloat(element.P_L), 0);

        setTotal({position_PL: totalPL1.toFixed(2), dayHistory_PL: totalPL2.toFixed(2)});
    }, [positions, daysHistory]);

    const labels = daysHistory.map((stock) => stock.Instrument);
    const dataChart = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: daysHistory.map((stock) => stock.Avg),
                backgroundColor: '#e900da69',
            }
        ]
    }

    return (
        <>
            <table className='col-12'>
                <thead className='font-small-medium text-secondary border-bottom sticky-top bg-white'>
                    <th><input type="checkbox" /></th>
                    <th className='fw-normal p-2'>Product</th>
                    <th className='fw-normal p-2'>Instrument</th>
                    <th className='fw-normal p-2 text-end'>Qty.</th>
                    <th className='fw-normal p-2 text-end'>Avg.</th>
                    <th className='fw-normal p-2 text-end'>LTP.</th>
                    <th className='fw-normal p-2 text-end'>P&L.</th>
                    <th className='fw-normal p-2 text-end'>Chg.</th>
                </thead>

                {positions.map((data, idx) =>
                (<tr key={idx} className='border-bottom'>
                    <td><input type="checkbox" disabled /></td>
                    <td className=' p-2'>
                        <span className='product-data px-2 py-1'>{data.Product}</span>
                    </td>
                    <td className='p-2 text-muted text-16'>{data.Instrument}</td>
                    <td className='text-16 p-2 text-end'>
                        {data.Qty >= 0 ? <span className='text-green'>{data.Qty}</span> : <span className='text-red'>{data.Qty}</span>}
                    </td>
                    <td className='text-16 p-2 text-end'>{(data.Avg).toLocaleString("en-IN")}</td>
                    <td className='text-16 p-2 text-end'>{(data.LTP).toLocaleString("en-IN")}</td>
                    <td className='text-16 p-2 text-end'>
                        {data.P_L >= 0 ? <span className='text-green'>{(data.P_L).toLocaleString("en-IN")}</span> : <span className='text-red'>{(data.P_L).toLocaleString("en-IN")}</span>}
                    </td>
                    <td className='font-small-medium p-2 text-end'>
                        {data.Net_Change >= 0 ? <span className='text-green'>{(data.Net_Change).toLocaleString("en-IN")}</span> : <span className='text-red'>{(data.Net_Change).toLocaleString("en-IN")}</span>}
                    </td>
                </tr>)
                )}
                <tr className='text-end text-16 border-bottom'>
                    <td colSpan={5}></td>
                    <td className='py-2'>Total</td>
                    <td>{total.position_PL > 0 ? <span className='text-green'>{(total.position_PL).toLocaleString("en-IN")}</span> : <span className='text-red'>{(total.position_PL).toLocaleString("en-IN")}</span>}</td>
                </tr>
            </table>

            <button className="mt-5 bg-transparent border-0 py-1 text-muted" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-position-day-history" aria-expanded="false">
                Day's history ({daysHistory.length})<KeyboardArrowDownIcon />
            </button>
            <div className="collapse" id="collapse-position-day-history">
                <table className='col-12 text-16'>
                    <thead className='font-small-medium text-secondary text-end border-top border-bottom sticky-top bg-white'>
                        <th className='fw-normal p-2 text-start'>Product</th>
                        <th className='fw-normal p-2 text-start'>Instrument</th>
                        <th className='fw-normal p-2'>Qty.</th>
                        <th className='fw-normal p-2'>Avg.</th>
                        <th className='fw-normal p-2'>LTP.</th>
                        <th className='fw-normal p-2'>P&L.</th>
                        <th className='fw-normal p-2'>Chg.</th>
                    </thead>

                    {daysHistory.map((data, idx) =>
                    (<tr key={idx} className='border-bottom text-end'>
                        <td className=' p-2 text-start'>
                            <span className='product-data px-2 py-1'>{data.Product}</span>
                        </td>
                        <td className='p-2 text-muted text-start'>{data.Instrument}</td>
                        <td className='p-2 '>
                            {data.Qty >= 0 ? <span className='text-primary'>{data.Qty}</span> : <span className='text-red'>{data.Qty}</span>}
                        </td>
                        <td className='p-2'>{(data.Avg).toLocaleString("en-IN")}</td>
                        <td className='p-2'>{(data.LTP).toLocaleString("en-IN")}</td>
                        <td className='p-2'>
                            {data.P_L >= 0 ? <span className='text-green'>+{(data.P_L).toLocaleString("en-IN")}</span> : <span className='text-red'>{(data.P_L).toLocaleString("en-IN")}</span>}
                        </td>
                        <td className='font-small-medium p-2'>
                            {data.Chg >= 0 ? <span className='text-green'>{(data.Chg).toLocaleString("en-IN")}</span> : <span className='text-red'>{(data.Chg).toLocaleString("en-IN")}</span>}
                        </td>
                    </tr>)
                    )}

                    <tr className='text-end text-16 border-bottom'>
                        <td colSpan={4}></td>
                        <td className='p-2'>Total</td>
                        <td>{total.dayHistory_PL > 0 ? <span className='text-green'>{(total.dayHistory_PL).toLocaleString("en-IN")}</span> : <span className='text-red'>{(total.dayHistory_PL).toLocaleString("en-IN")}</span>}</td>
                    </tr>

                </table>

                <VerticalGraph data={dataChart} />
            </div>
            <div className='py-5'>

            </div>
        </>

    )
}