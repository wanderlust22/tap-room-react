import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/images/Background.jpg';


function Home(){
    const customersLeft = {
        width: '45%',
        textAlign: 'center',
        float: 'left',
        marginTop: '10%',
        fontSize: '30px',
        border: '2px solid white'
    }
    const employeesRight = {
        width: '45%',
        textAlign: 'center',
        float: 'right',
        marginTop: '10%',
        fontSize: '30px',
        border: '2px solid white'
    }
    const linkStyling = {
        textDecoration : 'none',
        color: 'white',
        padding: '50px'
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