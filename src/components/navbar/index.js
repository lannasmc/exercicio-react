import React from 'react';
import logo from './react-logo.png';
import './navbar.css';

function NavBar(props) {
    return (
        <nav className="nav-navbar">
            <img className="logo-navbar" src={logo} />
            <ul>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Contatos</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;