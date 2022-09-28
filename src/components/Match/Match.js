import React from 'react';
import './Match.css'

const Match = (props) => {
    const {name, img, time} = props.product;
    return (
        <div className='match-show'>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Match;