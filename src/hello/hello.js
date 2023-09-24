import React from "react";
import { useParams } from "react-router-dom";

export default function Footer()
{
    const {name} = useParams();//Usar name como queryparam
    return(

        <div className="Hello">

            <h1>Hello! {name} </h1>
            

        </div>

    );
}