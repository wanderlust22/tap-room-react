import React from 'react';
import icon from '../assets/images/reactIcon.jpeg';

function Footer(){

    const footerStyling = {
            right: '0',
            bottom: '0',
            left: '0',
            padding: '5px',
            backgroundColor: '#efefef',
            textAlign: 'right'
    }
    return(
        <footer style={footerStyling}>
            <p><em> powered by </em>
            <img src={icon} alt="react"/>
            <em> and Will Quanstrom</em></p>
        </footer>
    );
}

export default Footer;