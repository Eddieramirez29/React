import React from "react";



export default function(props)
{
    return(
        <div className="Episode">
            <h1>Episode</h1>
            <p>Episode: {props.episode}</p>
            <p>Name: {props.name}</p>

            <img src={props.cover} alt={props.name}/>
        </div>
    );

}