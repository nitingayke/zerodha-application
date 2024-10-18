import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { daysHistory } from '../ZerodhaDummyData';
import PositionDataSection from './PositionDataSection';
import "./Positions.css";

export default function Position({positions}) {
    const [searchPositions, setSearchPositions] = useState("");

    const filterPosition = positions.filter((stock) => stock.Instrument.toLowerCase().includes(searchPositions.toLowerCase()));

    return (
        <div className="overflow-auto col-12 px-2">

            <header className='pt-5 py-3 d-flex align-items-center justify-content-between border-bottom'>
                <p className='fs-5 text-muted me-3 '>Positions({filterPosition.length})</p>

                <div className='d-flex align-items-center'>
                    <div className="input-group rounded-0 border p-1">
                        <span className="input-group-text text-secondary border-0" id="basic-addon1"><SearchIcon className='fs-6' /> </span>
                        <input value={searchPositions} onChange={(e) => setSearchPositions(e.target.value)} type="text" className="form-control font-small-medium text-secondary border-0 ps-2" placeholder="Search"/>
                    </div>
                    <ul className="font-small d-flex list-unstyled width-mid-none ps-2">
                        <li>
                            <a href="/" className="px-1 d-flex align-items-center link-hover">
                                <img src="/images/sensibull.svg" alt="" height={"11"} className='m-1'/>
                                <p>Analyze</p>
                            </a>
                        </li>
                        <li>
                            <a href="/" className='link-hover d-flex align-items-center px-1'>
                                <img src="/images/console.svg" height={"11"} alt="" />
                                <p>Analitics</p>
                            </a>
                        </li>
                        <li><a href="/" className='px-1 d-flex link-hover'><ArrowCircleDownOutlinedIcon className='fs-6' />Download</a></li>
                    </ul>
                </div>
            </header>
            <PositionDataSection positions={filterPosition} daysHistory={daysHistory}/>
        </div>
    )
}