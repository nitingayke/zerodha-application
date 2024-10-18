import React from 'react';
import WatchList from '../LeftSidebar/WatchList';

export default function MarketWatch({ showSellStockModal, showBuyStockModal, stock}) {
    return (
        <div className='col-12'>
            <WatchList watchList={stock} showSellStockModal={showSellStockModal} showBuyStockModal={showBuyStockModal} />
        </div>
    )
}