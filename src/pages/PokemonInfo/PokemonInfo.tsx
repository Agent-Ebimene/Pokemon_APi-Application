import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { Pokemon } from "../../utils/types";
import { PokemonEvolutions } from "../../utils/types";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import { getPokemon, getPokemonEvolution } from "../../utils/ApiServices";

interface LocationState {
  path: string;
  pokemon: Pokemon
}

const PokemonInfo = () => {
  const [evolutions, setEvolutions] = useState<PokemonEvolutions | null>(null);
  const firstSpecies = evolutions?.chain.species.name;
  const secondSpecies = evolutions?.chain.evolves_to[0]?.species.name;
  const thirdSpecies = evolutions?.chain.evolves_to[0]?.evolves_to[0]?.species.name;
  const [searchPokemon, setSearchPokemon] = useState<Pokemon>();

  const { path, pokemon } = useLocation().state as LocationState;

  const name = pokemon?.name || searchPokemon?.name;
  const sprites = pokemon?.sprites || searchPokemon?.sprites
  const abilities = pokemon?.abilities || searchPokemon?.abilities
  const types = pokemon?.types || searchPokemon?.types




  useEffect(() => {
    if (!pokemon) {
      (async () => {
        const pokemonData = await getPokemon(path);
        const evolutionsData = await getPokemonEvolution(pokemonData?.id);
        console.log('evolution', evolutionsData)
        console.log('pokemon----->', pokemonData)
        setSearchPokemon(pokemonData)
        setEvolutions(evolutionsData)
      })()
    } else {
      (async () => {
        const evolutionsData = await getPokemonEvolution(pokemon?.id);
        console.log('evolution', evolutionsData)
        setEvolutions(evolutionsData)
      })();
    }

  }, [pokemon?.id, path, pokemon]);

  const { authenticated, theme } = useContext(AppContext);
  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div id={theme} className="pokemon-info">
      <ToggleButton />
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3>{name}'s Types</h3>
          <ul>
            {types?.map((type, index) => (
              <li className="card-text" key={index}>
                {type?.type?.name}
              </li>
            ))}
          </ul>
          <h3>Evolutions</h3>
          <ul>
            <li>{firstSpecies}</li>
            <li>{secondSpecies}</li>
            <li>{thirdSpecies}</li>
          </ul>
          <h3>{name}'s Abilities</h3>
          <ul>
            {abilities?.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <img src={sprites?.back_default} className="info-image" alt={name}></img>
      </div>
    </div>
  );
};

export default PokemonInfo;
