import React from 'react';
import { Link } from 'react-router-dom';

const ShirtsMenu = () => {
    return (
        <div className="collection-dropdown">
            <span className="nav-item">Shirts ▾</span>
            <div className="dropdown-content">
                <Link to="/mens/shirts/formal" className="dropdown-link">Formal</Link>
                <Link to="/mens/shirts/stripes" className="dropdown-link">Stripes</Link>
                <Link to="/mens/shirts/checks" className="dropdown-link">Checks</Link>
                <Link to="/mens/shirts/casuals" className="dropdown-link">Casuals</Link>
                <Link to="/mens/shirts/beach" className="dropdown-link">Beach Shirts</Link>
                <Link to="/mens/shirts/jeans" className="dropdown-link">Jeans Shirt</Link>
            </div>
        </div>
    );
};

export default ShirtsMenu;
