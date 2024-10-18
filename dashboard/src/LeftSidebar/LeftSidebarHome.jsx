import React, { useEffect, useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "./LeftSidebar.css";
import WatchList from './WatchList';
import axios from 'axios';

export default function LeftSidebarHome({ showSellStockModal, showBuyStockModal, stocks}) {

    return (
        <div className='left-trades-sidebar'>


            <WatchList watchList={stocks} showSellStockModal={showSellStockModal} showBuyStockModal={showBuyStockModal} />

            <div className='col-12 d-flex justify-content-between sticky-bottom bg-light border-top py-1'>
                <ul className="pagination" disabled>
                    <li ><a className="border-end px-3 btn-hover " href="/">1</a></li>
                </ul>
                <div>
                    <a href="/">
                        <SettingsOutlinedIcon className=' mx-2 text-secondary' />
                    </a>
                </div>
            </div>
        </div>
    )
}