import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link className='restaurent' to="/restaurent">Restaurent</Link>
            
        </div>
    );
};

export default Header;