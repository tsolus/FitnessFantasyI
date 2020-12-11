import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Exercise() {
    return (
        <>
            <h1>You selected ____</h1>
            <Link to='/workouts'>
                <button>Go back to workouts</button>
            </Link>
        </>
        );
}

export default Exercise