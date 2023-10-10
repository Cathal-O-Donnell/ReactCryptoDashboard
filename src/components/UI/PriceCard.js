import React from 'react'

const PriceCard = (props) => {
    let baseClasses = "text-xs font-medium mr-2 px-2.5 py-0.5 black-text rounded";
    let positiveClasses = "positive-badge";
    let negativeClasses = "negative-badge";

    const getBadgeClass = (isIncreatePercentage) => {
        if (isIncreatePercentage) {
            return `${baseClasses} ${positiveClasses}`;
        } else {
            return `${baseClasses} ${negativeClasses}`;
        }
    };

    return (
        <div className='container border-radius-12 card-background p-2 my-1 d-flex align-items-center'>
            <div className='col-md-12'>
                <div className='row'>
                    <p className='text-secondary fs-6'>{props.title} (24h)</p>
                </div>

                <div className='row white-text fw-bold'>
                    <p className='text-uppercase'>{props.fiatCurrencyShortName} {props.fiatAmount} <span className='text-uppercase'>{props.amount}</span> <span className={getBadgeClass(props.isIncreasePercentage)}>{props.percentageChange}%</span></p>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;
