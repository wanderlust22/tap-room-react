import React from 'react';
import Beer from './Beer';

const BeerList = (props) => {
    const Background = {
        backgroundColor: '#CDDCDC',
        backgroundImage: 'radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)',
        backgroundBlendMode: 'screen, overlay'
    }

    return(
        <div style={Background}>
            <hr/>
            {props.beerList.map((x) => {return <Beer title={x.title} 
            style={x.style} 
            abv={x.abv} />; }) }
            <hr/>
        </div>
    );
}

export default BeerList;