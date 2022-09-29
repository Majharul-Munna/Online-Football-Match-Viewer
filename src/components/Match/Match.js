import React from 'react';
import './Match.css'

const Match = (props) => {
    const {name, img, time} = props.product;
    // const {handelAddToCart} = props;
    return (
        <div className='match-show'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>Match Time: {time} minute</h4>
            <button onClick={() => props.handelAddToCart(props.product)}>Add To List</button>
        </div>
    );
};

export default Match;