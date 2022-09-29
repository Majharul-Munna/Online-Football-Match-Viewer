import React, { useEffect, useState } from 'react';
import {addToDB, getStoredCart} from '../../utilites/fakedb';
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

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                console.log(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handelAddToCart = (product) =>{
        const newCart =[...cart, product];
        setCart(newCart);
        addToDB(product.id);
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