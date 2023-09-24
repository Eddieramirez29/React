import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../../src/Pokemon/Pokemon";

export default function SearchPokemon() {
  const { name } = useParams();

  const [activePokemon, setActivePokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Pokemon not found");
          }
          return response.json();
        })
        .then((data) => {
          const pokemon = {
            id: data.id,
            name: data.name,
            types: data.types.map((type) => type.type.name),
            sprite: data.sprites.front_default,
          };
          setActivePokemon(pokemon);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [name]);

  return (
    <>
      <h1>Hello!</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Pokemon
          name={activePokemon.name}
          id={activePokemon.id}
          types={activePokemon.types}
          sprite={activePokemon.sprite}
        />
      )}
    </>
  );
}
