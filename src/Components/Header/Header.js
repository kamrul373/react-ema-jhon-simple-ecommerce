import React from 'react';
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header className='header-container'>
            <nav className='navbar'>
                <img src={logo} alt="logo" />
                <ul className='menu'>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Orders</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;