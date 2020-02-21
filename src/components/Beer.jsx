import React from 'react';

const Beer = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <h6>{props.style}</h6>
            <h6>{props.abv}</h6>
        </div>
    );
}
export default Beer;