import React from 'react';
import WatchList from '../LeftSidebar/WatchList';

export default function MarketWatch({ showSellStockModal, showBuyStockModal, stock}) {
    return (
        <>
            <WatchList watchList={stock} showSellStockModal={showSellStockModal} showBuyStockModal={showBuyStockModal} />
        </>
    )
}