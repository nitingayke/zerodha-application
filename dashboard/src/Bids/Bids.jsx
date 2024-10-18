import React from 'react';
import Auctions from './Auctions';

export default function Bids({auctions}){
    return (
        <div className="overflow-auto px-2 col-12">
            <header className="border-bottom">
                <ul className="list-unstyled d-flex text-16">
                    <li className="btn-hover p-2 section-link selected-link">Auctions</li>
                    <li className="btn-hover p-2 section-link">PIO</li>
                    <li className="btn-hover p-2 section-link">Govt.securities</li>
                </ul>
            </header>
            <Auctions auctions={auctions}/>
        </div>
    )
}