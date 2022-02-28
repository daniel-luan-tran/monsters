import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />
            <h3 id={"monster_" + props.monsters.id}>
                {props.monsters.id + "-" +props.monsters.name}
            </h3>
            <div>{props.monsters.email}</div>
        </div>
    );
}