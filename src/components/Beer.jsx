import React from 'react';
import Poison from '../assets/images/poison.png';

const Beer = (props) => {

    let poison;
    if(props.abv > 6){
        poison = <img src={Poison} alt="this is a high gravity beer"/>
    }
    
    return(
        <div>
            <h3>{props.title}</h3>
            <h6>{props.style}</h6>
            <h6>{props.abv} % {poison}</h6>
            <hr/>
        </div>
    );
}
export default Beer;