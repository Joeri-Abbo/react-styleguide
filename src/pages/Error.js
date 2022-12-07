import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (<p>
        Er heeft een fout plaats gevonden probeer het <Link to='/'>opnieuw</Link>
    </p>);
};

export default Error;
