import React from 'react'

const TotalBalance = (props) => {
    return (
        <div className='container p-1 my-1 white-text d-flex flex-column align-items-center'>
            <p className='fs-5 fw-semibold margin-bottom-5'>{props.curencySymbol} {props.totalBalance}</p>
            <p className='fs-6'>Total Balance</p>
        </div>
    );
}

export default TotalBalance;