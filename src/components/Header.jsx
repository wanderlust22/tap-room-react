import React from 'react';

function Header(){
  
  const headerStyling = {
    backgroundColor: 'coral',
    color: 'blue',
    fontFamily: 'Arial',
    padding: '15px',
    textAlign: 'center'
  }
  return (
    <header style={headerStyling}>
      <h1>Figurehead Brewing Co.</h1>
    </header>
  );
}

export default Header;