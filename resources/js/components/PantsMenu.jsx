import React from 'react';
import { Link } from 'react-router-dom';

const PantsMenu = () => {
    return (
        <div className="collection-dropdown">
            <span className="nav-item">Pants ▾</span>
            <div className="dropdown-content">
                <Link to="/mens/pants/casual" className="dropdown-link">Casual</Link>
                <Link to="/mens/pants/formal" className="dropdown-link">Formal</Link>
                <Link to="/mens/pants/jeans" className="dropdown-link">Jeans</Link>
            </div>
        </div>
    );
};

export default PantsMenu;
