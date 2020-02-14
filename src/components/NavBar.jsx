import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <nav>
      <Link to="/customers">Beer List</Link> 
      <Link to="/">Home</Link>
      <Link to="/employees">Employees</Link>
      </nav>
    </div>
  );
}

export default NavBar;