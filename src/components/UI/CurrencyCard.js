import React from 'react'

const CurrencyCard = (props) => {

    return (
        <div className='container rounded my-1 card-background white-text d-flex align-items-center'>
            <div className='col-md-4'>
                <p className='fs-5 text-center'>{props.title}</p>
            </div>

            <div className='col-md-8'>
                <div className='row'>
                    <p className='fs-6 text-center margin-bottom-5'>{props.cryptoAmount} <span className='text-uppercase'>{props.currencyShortName}</span></p>
                </div>

                <div className='row'>
                    <p className='text-secondary fs-6 text-center'>{props.fiatAmount} <span className='text-uppercase'>{props.fiatCurrencyShortName}</span></p>
                </div>
            </div>
        </div>
    );
}

export default CurrencyCard;
