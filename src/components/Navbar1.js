import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Logo from './logo.png';
import '../App.css';

function Navbar1() {
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

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navabar-logo" onClick={closeMobileMenu} >
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li classNames='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li classNames='nav-item'>
                            <Link to='/myProgression' className='nav-links' onClick={closeMobileMenu}>
                                My progression
                            </Link>
                        </li>
                        <li classNames='nav-item'>
                            <Link to='/workouts' className='nav-links' onClick={closeMobileMenu}>
                                Workouts
                            </Link>
                        </li>
                        <li classNames='nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign-out
                            </Link>
                        </li>
                    </ul>
                    {button && <Button className="main__btn_sign">SIGN-OUT</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar1