import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-left">
                <Link to="/" className="custom-logo">
                    <img src="/logo.png" alt="The Edge Logo" className="logo-img" />
                </Link>
            </div>
            <Menu />
        </header>
    );
};

export default Header;
