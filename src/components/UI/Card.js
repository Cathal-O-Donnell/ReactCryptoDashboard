import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
 return (
    <div id="mainContainer" class="col-md-10 card-background offset-md-1 marginTop20 marginBottom20">
        {props.children}
    </div>
 );
};

export default Card;