import React from "react";
import PokemonBrowser from "../Pokemon/PokemonBrowser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "../../pages/pokemon/Pokemon";
import Hello from "../hello/hello";
import SearchPokemon from "../../pages/pokemon/SearchPokemon";

//Definir las rutas de la url

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
             
            {/* <Route path="/:name" element={<Hello />} /> */}
            <Route path="/:name" element={<SearchPokemon />} />
                
                
            </Routes>
        </BrowserRouter>
    );
}
