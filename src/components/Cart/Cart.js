import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;
    }

    return (
        <div>
            <h2>Match Info</h2>
            <div className='brazil-info'>
            <h3>Fave Team: <span className='brazil'>Brazil</span></h3>
            <h5>Won World Cup 5 Times: <br />
            <span className='world-cup'>1958, 1962, 1970, 1994, 2002</span></h5>
            </div>

            <h2>Add A Break</h2>
            <div className='break'>
                <button className='break-time'>20 m</button>
                <button className='break-time'>30 m</button>
                <button className='break-time'>40 m</button>
                <button className='break-time'>50 m</button>
            </div>
            <div className='total-duration'>
                <h2>Match Details</h2>
                <h3>Match Duration: {total} minute</h3>
                <h3>Break Duration: </h3>
            </div>
        </div>
    );
};

export default Cart;