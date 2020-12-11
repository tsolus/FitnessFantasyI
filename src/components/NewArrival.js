import '../App.css';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

function NewArrival() {

    return (
        <div className='hero-container'>
            <h1 style={{}}>YOUR DREAMS AWAIT</h1>
            <p>What are you waiting for?</p>
            <Link to='/sign-up'>
                <button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    BECOME PART OF THE ADVENTURE
            </button>
            </Link>
            <div className="hero-trailer">
                <button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch our trailer <i className='far fa-play-circle' />
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=t4V3XELC5io&feature=youtu.be"
                        width="600px"
                        height="300px"
                    />
                </button>
            </div>
        </div>
    );
}

export default NewArrival;