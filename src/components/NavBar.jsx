import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function NavBar(){
    const barStyling = {
        backgroundColor: 'blue',
        textAlign: 'center',
        padding: '5px',
        color: 'white',
        textDecoration: 'none'
    }
   
  return (
    <div>
      <nav style={barStyling}>
          <BrowserRouter>
            <div>
                <Link to="/customers">Beer List</Link> 
                <Link to="/">Home</Link>
                <Link to="/employees">Employees</Link>
            </div>
          </BrowserRouter>
      </nav>
    </div>
  );
}

export default NavBar;