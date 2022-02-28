import React from 'react';
import {Card} from '../card/card.component.jsx'
import './card-list.styles.css';

export const CardList = (props) => {
    console.log("CardList-prop", props);
    return (<div className='card-list'>
        {props.monsters.map(item=>{return (
            <Card key={item.id} monsters={item}></Card>
        )})}
    </div>)
};