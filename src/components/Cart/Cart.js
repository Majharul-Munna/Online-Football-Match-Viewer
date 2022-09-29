import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;
    }

    const [time, setTime] = useState([0]);
    const updateTime1 = () =>{
        const element1 = document.getElementById('btn-1');
        const newTime1 = element1.innerText;
        
        setTime(newTime1)
    }
    const updateTime2 = () =>{
        const element2 = document.getElementById('btn-2');
        const newTime2 = element2.innerText;
        setTime(newTime2)
    }
    const updateTime3 = () =>{
        const element3 = document.getElementById('btn-3');
        const newTime3 = element3.innerText;
        setTime(newTime3)
    }
    const updateTime4 = () =>{
        const element4 = document.getElementById('btn-4');
        const newTime4 = element4.innerText;
        setTime(newTime4)
    }


    return (
        <div>
            <h2>Match Info</h2>
            <div className='brazil-info'>
            <h3>My Fave Team: <span className='brazil'>Brazil</span></h3>
            <h5>Won World Cup 5 Times: <br />
            <span className='world-cup'>1958, 1962, 1970, 1994, 2002</span></h5>
            </div>

            <h2>Add A Break</h2>
            <div className='break'>
                <button onClick={updateTime1} id='btn-1' className='break-time'>20 </button>
                <button onClick={updateTime2} id='btn-2' className='break-time'>30 </button>
                <button onClick={updateTime3} id='btn-3' className='break-time'>40 </button>
                <button onClick={updateTime4} id='btn-4' className='break-time'>50 </button>
            </div>
            <div className='total-duration'>
                <h2>Match Details</h2>
                <h3>Match Duration: {total} minute</h3>
                <h3>Break Duration: {time} minute</h3>
            </div>
            <div>
                <button className='last-button'>All Completed</button>
            </div>
        </div>
    );
};

export default Cart;