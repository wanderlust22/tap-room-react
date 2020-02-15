import React from 'react';
import Home from './Home';
import background from '../assets/images/Background.jpg';

function Splash(){

    return(
        <div className='background'>
            <style jsx>{`
                .background {
                    background: url(${background}) no-repeat center center fixed;
                    background-size: cover;
                    height: 500px;
                    marginTop: 10px;
                    height: 500px;
                }
            `}</style>
            <Home />
        </div>
    );
}

export default Splash;