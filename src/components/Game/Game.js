import React, { useEffect, useState } from 'react';
import Match from '../Match/Match';
import './Game.css'

const Game = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])
    return (
        <div className='game-container'>
            <div className='match-details'>
                {
                    products.map(product=> <Match 
                        key={product.id}
                        product={product}
                        ></Match>)
                }
            </div>

            <div className='match-time'>This Match time</div>
        </div>
    );
};

export default Game;