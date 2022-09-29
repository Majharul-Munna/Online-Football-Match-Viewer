import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Match from '../Match/Match';
import './Game.css'

const Game = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, []);
    const handelAddToCart = (product) =>{
        console.log(product);
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
        <div className='game-container'>
            <div className='match-details'>
                {
                    products.map(product=> <Match 
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                        ></Match>)
                }
            </div>

            <div className='match-time'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Game;