import React, { useState } from 'react';

function TemperatureConverter() {
    let [DoC , setDoC] = useState ("") ;
    let [DoF , setDoF] = useState ("") ;

    let handleDoCChange = (event) => {
        setDoC(event.target.value) ;
        setDoF((event.target.value * 9) + 5 / 32 ) ;
    } ;

    let handleDoFChange = (event) => {
        setDoF(event.DoF.value) ;
        setDoC(((event.target.value -32 ) * 5) / 9 ) ;
    };

    return (
        <div>
            <div>
                <label>
                   Độ C : <input type='number' value={DoC} onChange={handleDoCChange}/> 
                </label>
            </div>

            <div>
                <label>
                    Độ F : <input type='number' value={DoF} onChange={handleDoFChange}/> 
                </label>
            </div>
        </div>
    );
}

export default TemperatureConverter;