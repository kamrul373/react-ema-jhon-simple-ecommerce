import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header className='header-container'>
            <nav className='navbar'>
                <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                <ul className='menu'>
                    <li><NavLink
                        className={({ isActive }) => isActive ? "active" : undefined}
                        to="/shop">Shop</NavLink>
                    </li>
                    <li><NavLink
                        className={({ isActive }) => isActive ? "active" : undefined}
                        to="/orders">Orders</NavLink>
                    </li>
                    <li><NavLink
                        className={({ isActive }) => isActive ? "active" : undefined}
                        to="/inventory">Inventory</NavLink>
                    </li>
                    <li><NavLink
                        className={({ isActive }) => isActive ? "active" : undefined}
                        to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;