import React from 'react';
import Logo from '../../assets/images/image.png';
import './Navbar.module.css';



function Navbar() {
    return (
        <nav className="Navbar">
            <img className="Logo "src={Logo} alt="COVID-19"/>
        </nav>
    );
}

export default Navbar;