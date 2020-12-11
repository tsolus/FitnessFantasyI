import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from './logoFF12.png';
import '../App.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                        <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Start the adventure</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Our project</h2>
                        <Link to='/'>GitHub</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <small class='website-rights'>Fitness Fantasy I © 2020</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;