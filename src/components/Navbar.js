import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">AIRBNB</Link>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="menu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/log" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
