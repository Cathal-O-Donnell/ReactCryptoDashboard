import React from 'react'

const SectionTitle = (props) => {
    return (
        <div>
            <h3 className='text-start fw-bold white-text'>{props.title}</h3>
        </div>
    );
}

export default SectionTitle;