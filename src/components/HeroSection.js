import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import done from "./done.png"
import notdone from "./notdone.png"

function HeroSection() {

    const [isDone, setDone] = useState(false);
    const [image, setImage] = useState(done);

    const change = () => {
        isDone ? setImage(done) : setImage(notdone);
        setDone(!isDone)
    };

    return (
        <div className='hero-container'>
            <h1 style={{}}>YOUR DREAMS AWAIT</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    BECOME PART OF THE ADVENTURE
                </Button>
                <div className="outerBox">
                    <h1 className="text"> Courir 10 km </h1>
                    <img src={image} onClick={change} className="image" />
                    <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                    <h1 className="text">Faire 100 pompes</h1>
                    <img src={image} onClick={change} className="image" />
                    <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                </div>
            </div>
            <div className="hero-trailer">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch our trailer <i className='far fa-play-circle' />
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=1mJE8FlSy4A&ab_channel=StormAccess"
                        width="600px"
                        height="300px"
                    />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;