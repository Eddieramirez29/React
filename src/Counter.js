import React, { useState } from "react";


export default function Counter()
{
    //Ayuda a redenrizar la página(hook #1)
    //Declara count e inicializa en 0 y crea una función setCount
    //El componente count se renderizará y esto será visible en el explorador.
    const [count, setCount] = useState(0);
    

    function incrementar()
    {
       setCount(count + 1);//No puede ser count++
        
    }
    return(
        <div className="App">
            <h1>Contador</h1>
            <p>Count: {count}</p>
            <button onClick={incrementar}>Click</button>
        </div>
    );
}