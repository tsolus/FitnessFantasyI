import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {
    return (
        <div className='cards'>
            <br/>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src='pushups.jpg'
                            text='Description'
                            label='ARMS/SHOULDERS'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem
                            src='legs.jpg'
                            text='Description'
                            label='LEGS/HIPS'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;