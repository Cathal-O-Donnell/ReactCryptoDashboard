import React from 'react'

const InfoContainer = (props) => {
    return (
        <div className="col-sm border-radius-12 card-background margin-sides-10 text-center">
            <div className='row'>
                <p className='text-secondary fs-6 margin-bottom-0'>{props.title}</p>
            </div>
            <div className='row white-text fw-bold '>
                <p>{props.body}</p>
            </div>
        </div>
    );
};

export default InfoContainer;