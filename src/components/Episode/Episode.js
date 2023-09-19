import React from "react";



export default function MyComponent(props) {
  return (
    <div className="Episode">
      {/* Carga cuando ya tiene la información y la muestra Insertar js */}
      {props.episodes.length > 0 ? (
        <div>
          <h1>Episode</h1>
          <p>Episode: {props.episode}</p>
          <p>Name: {props.name}</p>
          <img src={props.cover} alt={props.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
