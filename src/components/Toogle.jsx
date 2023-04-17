import React, { useState } from 'react';

function Toogle() {
    const [mount , setMount] = useState(false) 
    const handleMount = () => {
        setMount(!mount) ;
    }
    return (
        <div>
            <h1>{mount && <h5>Hello !!! </h5>} </h1>
            <button onClick={handleMount}>Toggle</button> 
        </div>
    );
}

export default Toogle;