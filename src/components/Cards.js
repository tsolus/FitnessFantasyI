import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {
    return (
        <div className='background'>
            <div className="container">
                <div className="heading">WORKOUT</div>
                <div style={{ borderTop: "2px solid lightgray" }} />
                <br />
                <div className="cards">
                    <div className='cards_wrapper'>
                        <ul className='cards__item'>
                            <CardItem
                                src='core.PNG'
                                text='Core reinforcement / 8mins / Medium intensity / Beginner level'
                                label='CORE'
                                path='/core' />
                        </ul>
                        <ul className='cards__item'>
                            <CardItem
                                src='legs.jpg'
                                text='Legs / 8mins / Medium intensity / Advanced level'
                                label='LEGS'
                                path='/legs' />
                        </ul>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default Cards;