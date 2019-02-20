import React from 'react';

import Button from 'components/common/Button';

const PriceCard = ({priceData}) => {

    const {title, features, cost, isYear, isDefault=false, message} = priceData;

    return (
        <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">{title}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">${cost} <small class="text-muted">/ {isYear?'yr':'mo'}</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    {features.map((feature)=>{
                        return <li>{feature}</li>
                    })}
                </ul>
                <Button isOutline={isDefault} text={message} />
            </div>
        </div>
    )
}

export default PriceCard;