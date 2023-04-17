import React, { useState } from 'react';

function CountClick() {
    let [count , setCount] = useState(0) 

    let handlePlus = () => {
        setCount(count + 1) ;
    }

    let handleMinus = () => {
        setCount(count - 1) ;
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handlePlus}>ClickPlus</button> 
            <button onClick={handleMinus}>ClickMinus</button> 
        </div>
    );
}

export default CountClick;