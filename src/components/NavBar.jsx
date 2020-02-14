import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <nav>
          <BrowserRouter>
            <Link to="/customers">Beer List</Link> 
            <Link to="/">Home</Link>
            <Link to="/employees">Employees</Link>
          </BrowserRouter>
      </nav>
    </div>
  );
}

export default NavBar;