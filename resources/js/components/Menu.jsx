import React from 'react';
import { Link } from 'react-router-dom';
import ShirtsMenu from './ShirtsMenu';
import PantsMenu from './PantsMenu';

const Menu = () => {
    return (
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <ShirtsMenu />
            <PantsMenu />
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Menu;
