import React from 'react';
import  "./Pokemon.css";

export default function Pokemon(props) {
  return (
    <div className="pokemon">
      {/* Carga cuando ya tiene la información y la muestra Insertar js */}
      {props.pokemons.length > 0 ? (
        <div>
          <h1>Pokemon</h1>
          <p>id: {props.id}</p>
          <p>name: {props.name}</p>
          <img src={props.sprite} alt={props.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
