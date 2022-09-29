import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
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
            <div>
                <p>Selected Matches: {cart.length}</p> 
                <h3>Match Duration: </h3>
                <h3>Break Duration: </h3>
            </div>
        </div>
    );
};

export default Cart;