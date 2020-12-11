import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Logo from './logo.png';
import '../App.css';

function Navbar2() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    const closeMobileMenu = () => setClick(false);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navabar-logo" onClick={closeMobileMenu} >
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar2