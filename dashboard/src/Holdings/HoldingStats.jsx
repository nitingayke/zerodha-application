import { useState, useEffect, Profiler } from "react";

export default function HoldingStats({ holdings, handleTotalSum, total }) {

    

    useEffect(() => {
        let currentValue = 0, profitAndLoss = 0, netCharge = 0, dayCharge = 0;
        holdings.forEach((element) => {
            currentValue += element.Cur_val;
            profitAndLoss += element.P_L;
            netCharge += element.Net_chg;
            dayCharge += element.Day_chg;
        });

        handleTotalSum({currentValue, profitAndLoss, netCharge, dayCharge});
    }, []);


    return (

        <table className='col-12 text-end font-small-medium '>
            <thead className='text-secondary border-top border-bottom sticky-top bg-light'>
                <th className='fw-normal border-end p-2 text-start'>Instrument</th>
                <th className='fw-normal p-2'>Qty.</th>
                <th className='fw-normal p-2'>Avg.cost</th>
                <th className='fw-normal border-end p-2  '>LTP</th>
                <th className='fw-normal p-2'>Cur.val</th>
                <th className='fw-normal p-2'>P&L</th>
                <th className='fw-normal p-2'>Net chg.</th>
                <th className='fw-normal p-2'>Day chg.</th>
            </thead>
            {holdings.map((data, idx) =>
            (<tr key={idx} className='border-bottom p-2 text-secondary'>
                <td className='border-end p-2 text-16 text-muted text-start'>{data.Instrument}</td>
                <td className='p-2'>{data.Qty}</td>
                <td className='p-2'>{(data.Avg_cost).toFixed(2)}</td>
                <td className='border-end p-2'>{data.LTP}</td>
                <td>{(data.Cur_val || "").toLocaleString("en-IN")}</td>
                <td className='p-2'>
                    {data.P_L >= 0 ? <span className='text-green'>{(data.P_L || "").toLocaleString("en-IN")}</span> : <span className='text-red'>{(data.P_L || "").toLocaleString("en-IN")}</span>}
                </td>
                <td className='p-2 '>
                    {data.Net_chg >= 0 ? <span className='text-green'>+{(data.Net_chg || "").toLocaleString("en-IN")}</span> : <span className='text-red'>{(data.Net_chg || "").toLocaleString("en-IN")}</span>}
                </td>
                <td className='p-2 '>
                    {(data.Day_chg / data.Avg_cost) * 100 >= 0 ? <span className='text-green '>+{((data.Day_chg / data.Avg_cost) * 100).toFixed(2)}%</span> : <span className='text-red '>{((data.Day_chg / data.Avg_cost) * 100).toFixed(2)}%</span>}
                </td>
            </tr>)
            )}

            <tr className='text-muted  border-bottom'>
                <td colSpan={4} className='py-2'>Total</td>
                <td>{total.currentValue}</td>
                <td>{total.profitAndLoss > 0 ? <span className='text-green'>{total.profitAndLoss}</span> : <span className='text-red'>{total.profitAndLoss}</span>}</td>
                <td>{total.netCharge > 0 ? <span className='text-green'>{total.netCharge}</span> : <span className='text-red'>{total.netCharge}</span>}</td>
                <td>{(total.dayCharge / (holdings.length || 1)) > 0 ? <span className='text-green'>{(total.dayCharge / (holdings.length || 1)).toFixed(2)}%</span> : <span className='text-red'>{(total.dayCharge / (holdings.length || 1)).toFixed(2)}%</span>}</td>
            </tr>
        </table>
    )
}