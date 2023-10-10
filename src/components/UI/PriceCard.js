import React from 'react'

const PriceCard = (props) => {
    return (
        <div className='container rounded card-background p-2 my-1 d-flex align-items-center'>
            <div className='col-md-12'>
                <div className='row'>
                    <p className='text-secondary fs-6'>{props.title} (24h)</p>
                </div>

                <div className='row white-text fw-bold'>
                    <p className='text-uppercase'>{props.fiatCurrencyShortName} {props.fiatAmount} <span className='text-uppercase'>{props.amount}</span> <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">+ {props.increasePercentage}%</span></p>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;