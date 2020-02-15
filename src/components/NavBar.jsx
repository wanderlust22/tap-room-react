import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function NavBar(){
    const barStyling = {
        backgroundColor: 'blue',
        textAlign: 'center',
        padding: '5px'
    }

    const linkStyling = {
      color: 'white',
        textDecoration: 'none',
        padding: '15px'
    }
   
  return (
    <div>
      <nav style={barStyling}>
          <BrowserRouter>
            <div style={linkStyling}>
                <Link to="/customers" style={linkStyling}>Beer List</Link> 
                <Link to="/" style={linkStyling}>Home</Link>
                <Link to="/employees" style={linkStyling}>Employees</Link>
            </div>
          </BrowserRouter>
      </nav>
    </div>
  );
}

export default NavBar;