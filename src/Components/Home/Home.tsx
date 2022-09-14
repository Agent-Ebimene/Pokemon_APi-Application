import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useEffect, useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import SearchModal from "../PokemonCard/Modal/SearchModal";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

interface PokemonList {
  prev: string;
  results: {
    name: string;
    url: string;
  };
}
export interface Pokemon {
  id: number;
  url: string;
  name: string;
  sprites: {
    back_default: string;
  };
  setDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const { authenticated, theme, setTheme } = useContext(AppContext);

  //function to get pokemons

  const getPokemonList = async () => {
    try {
      const listResponse = await fetch(URL);
      const res = await listResponse.json();
      console.log(res);
      res.results.forEach(async (pokemon: Pokemon) => {
        const data = await fetch(pokemon.url);
        const res = await data.json();
        console.log(res);
        setPokemonList((item) => {
          item = [...item, res];
          return item.sort((a, b) => (a.id > b.id ? 1 : -1));
        });
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading Pokemon</div>
      ) : (
        <div>
          <SearchButton />
          <SearchModal />
          <div className="pokemon-container">
            {pokemonList.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                url={pokemon.url}
                id={pokemon.id}
                sprites={pokemon.sprites}
                setDetailsOpen={pokemon.setDetailsOpen}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
