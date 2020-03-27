import React from 'react';
import './card-list.css';
import { Card } from '../card/card';

// CardList will be a functional component
export const CardList = (props) => {
    return (
        <div className="card-list">
            {/* don't need to use this keyword because props are passed in as paramenters */}
            {
            props.monsters.map(monster => <Card key={monster.id} monster={monster} />)
            }   
        </div>

    )
}