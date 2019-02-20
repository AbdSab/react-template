import React from 'react';

import Heading   from 'components/common/Heading';
import PriceCard from 'components/common/PriceCard';

import ListPrices from 'mock/prices.mock';

const Prices = ({listPrices}) =>{

    const title = "Pricing";
    const description = "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.";

    return (
        <>
            <div className="container">
                <Heading title={title} description={description}/>
                <div class="card-deck mb-3 text-center">
                    {ListPrices.map((price) => {
                        return <PriceCard priceData={price} />
                    })}
                </div>
            </div>  
        </>
    )
}

export default Prices;