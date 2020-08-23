import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './AppHeader.scss';

export function AppHeader() {
    return (
        <header>
        <div className="header-content flex space-between align-center container">
        <div className="logo flex align-center">
            <Link to="/">Mr BitC<span><i className="fab fa-bitcoin"></i></span>in</Link>
        </div>
    
        <nav className="flex align-center">
            <NavLink to="/" exact><i className="fas fa-home"></i></NavLink>
            <NavLink to="/contact" exact ><i className="fas fa-users"></i></NavLink>
            <NavLink to="/statistic" exact><i className="fas fa-chart-line"></i></NavLink>
        </nav>
    </div>
    </header>    
    )
}
