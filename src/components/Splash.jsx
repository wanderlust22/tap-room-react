import React from 'react';
import Home from './Home';

const background = '../assets/images/Background.jpg';

function Splash(){
    const splashStyling = {
        backgroundImage: `url( ${background} )`,
        marginTop: '10px',
        height: '500px',
        border: '5px solid black',
        position: 'relative'
    }
    return(
        <div style={splashStyling}>
            <Home />
        </div>
    );
}

export default Splash;