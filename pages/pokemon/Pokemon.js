import PokemonBrowser from "../../src/Pokemon/PokemonBrowser";
import React from "react";
import Footer from "../../src/footer/footer";

export default function pokemon()
{
    return(

        <div className="Pokemon">

            <h1>Pokemon</h1>
            <PokemonBrowser/>
            <Footer/>

        </div>

    );
}