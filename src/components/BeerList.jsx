import React from 'react';

const BeerList = (props) => {
    return(
        <div>
            <hr/>
            {props.beerList.map((x) => {return <Beer title={x.title} 
            style={x.style} 
            abv={x.abv} />; }) }
            <hr/>
        </div>
    );
}

export default BeerList;