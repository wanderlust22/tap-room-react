import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

    return(
    <div>
        <h2>The page you're looking for does not exist</h2>
        <h2>Would you like to return to <Link to='/'>home</Link> instead?</h2>
    </div>
    );
}
export default Error404;