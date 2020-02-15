import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const customersLeft = {
        width: '45%',
        textAlign: 'center',
        float: 'left',
        marginTop: '10%',
    }
    const employeesRight = {
        width: '45%',
        textAlign: 'center',
        float: 'right',
        marginTop: '10%',

    }
    const linkStyling = {
        textDecoration : 'none'
    }
    return(
        <div>
            <div style={customersLeft}>
            <Link to="/customers" style={linkStyling}>Beer List</Link> 
            </div>
            <div style={employeesRight}>
            <Link to="/employees" style={linkStyling}>Employees</Link>    
            </div>
        </div>
    );
}

export default Home;