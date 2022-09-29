import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question'>
                <h2>How does react works?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='question'>
                <h2>What is the difference between props and state in React component?</h2>
                <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div className='question'>
                <h2>What is the work of useEffect?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.</p>
            </div>
        </div>
    );
};

export default Question;