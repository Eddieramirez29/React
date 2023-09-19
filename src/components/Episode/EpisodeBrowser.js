import React, { useEffect, useState } from "react";
import Episode from "../../Pokemon";

export default function PokemonBrowser() {
    const pokemons = [
        {
            id: 1,
            name: "bulbasaur",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            id: 4,
            name: "charmander",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            id: 7,
            name: "squirtle",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            id: 25,
            name: "pikachu",
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
    ];

    const [pokemon, setPokemon] = useState(0);
    const [pokemonList, setPokemonList] = useState([]);
    const [activePokemon, setActivePokemon] = useState({});

    useEffect(() => {
        console.log("Render")
        setPokemonList(pokemons);
    }, []);

    useEffect(() => {
        setActivePokemon(pokemonList[pokemon]);
    }, [pokemon, pokemonList]);

    function nextPokemon() {
        if (pokemon > pokemonList.length - 1) {
            alert("No more Pokemon");
            return;
        }
        setPokemon(pokemon + 1);
    }

    function previousPokemon() {
        if (pokemon === 0) {
            alert("No more Pokemon");
            return;
        }
        setPokemon(pokemon - 1);
    }

    return (
        <div className="PokemonBrowser">
            {
                pokemonList.length > 0 ? (
                    <div>
                        <h1>Pokemon Browser</h1>
                        {
                            activePokemon ? (
                                <Pokemon name={activePokemon.name} id={activePokemon.id} sprite={activePokemon.sprite} />
                            ) : (
                                <p>No Pokemon selected</p>
                            )
                        }
                        <button onClick={previousPokemon}>Previous</button>
                        <button onClick={nextPokemon}>Next</button>
                    </div>
                ): ( <p>Loading...</p> )
            }
        </div>
    );
}
