import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/Shop">Shop</Link>
                <Link to="/Review">Order Review</Link>
                <Link to="/Manage">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;