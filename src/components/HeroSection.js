import React, { useState } from 'react';
import './HeroSection.css';
import done from "./done.png"
import notdone from "./notdone.png"
import { Link } from 'react-router-dom';

function HeroSection() {

    const [isDone, setDone] = useState(false);
    const [image, setImage] = useState(notdone);

    const change = () => {
        isDone ? setImage(done) : setImage(notdone);
        setDone(!isDone)
    };

    const [isDone2, setDone2] = useState(false);
    const [image2, setImage2] = useState(notdone);

    const change2 = () => {
        isDone2 ? setImage2(done) : setImage2(notdone);
        setDone2(!isDone2)
    }; 

    const [isDone3, setDone3] = useState(false);
    const [image3, setImage3] = useState(notdone);

    const change3 = () => {
        isDone3 ? setImage3(done) : setImage3(notdone);
        setDone3(!isDone3)
    };

    return (     
        <div className="background">
            <div className="container">
                <div className="heading">QUESTS</div>
                <div style={{ borderTop: "2px solid lightgray" }} />
                <div className="title">
                    Do 100 push-ups
                    <img src={image} onClick={change} className="image_container" />
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="title">
                    Run 10 kilometers
                    <img src={image2} onClick={change2} className="image_container" />
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }} />

                <div className="title">
                    Stretch chest for 10 minutes
                    <img src={image3} onClick={change3} className="image_container" />
                </div>
            </div>
            <div className="container">
                <div className="heading">FEEDBACK</div>
                <div style={{ borderTop: "2px solid lightgray" }} />
                <Link to='/feedback'>
                    <button className="main__btn_feedback"><a>Submit your feedback</a></button>
                </Link>
            </div>
        </div>
         
    );
}

export default HeroSection;