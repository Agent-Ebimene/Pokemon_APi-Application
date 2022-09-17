import React, { useEffect, useState } from "react";

import ReactSwitch from "react-switch";
import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { Pokemon } from "../../Utils/services";
import { PokemonEvolutions } from "../../Utils/services";
const EVOLUTION_URL = "https://pokeapi.co/api/v2/evolution-chain/";

const PokemonInfo = () => {
  const [evolutions, setEvolution] = useState<PokemonEvolutions | null>(null);

  const { name, id, sprites, types, abilities } = useLocation()
    .state as Pokemon;

  const getEvolutionChains = async (id: number) => {
    const evolutionData = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    let evolutions: PokemonEvolutions = await evolutionData.json();
    setEvolution(evolutions);
    const { species, evolves_to } = evolutions.chain;
  };

  useEffect(() => {
    getEvolutionChains(id);
  }, [id]);
  const { authenticated, theme, setTheme } = useContext(AppContext);
  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pokemon-info">
      <div className="switch ">
        <label>{theme ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch
          checked={theme}
          onChange={() => {
            setTheme(!theme);
          }}
        />
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3>{name}'s Types</h3>
          <ul>
            {types.map((type, index) => (
              <li className="card-text" key={index}>
                {type.type.name}
              </li>
            ))}
          </ul>
          <h3>Evolutions</h3>
          <ul>
            <li></li>
            {evolutions?.chain.evolves_to.map((ev, index) => (
              <div key={index}>
                <li>{ev.species.name}</li>
                {ev.evolves_to.map((ev, index) => (
                  <li key={index}>{ev.species}</li>
                ))}
              </div>
            ))}
          </ul>
          <h3>{name}'s Abilities</h3>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <img src={sprites.back_default} className="info-image" alt={name}></img>
      </div>
    </div>
  );
};

export default PokemonInfo;
