import React from 'react';

function Footer(){

    const footerStyling = {
            position: 'absolute',
            right: '0',
            bottom: '0',
            left: '0',
            padding: '.6rem',
            backgroundColor: '#efefef',
            textAlign: 'right'
    }
    return(
        <footer style={footerStyling}>
            <p><em> powered by </em>
            <img src="./assets/images/reactIcon.png" alt=""/>
            <em> and Will Quanstrom</em></p>
        </footer>
    );
}

export default Footer;