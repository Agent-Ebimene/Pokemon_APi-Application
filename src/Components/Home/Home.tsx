import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useEffect, useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import SearchModal from "../PokemonCard/Modal/SearchModal";
import PokemonCard from "../PokemonCard/PokemonCard";
import ReactSwitch from "react-switch";
import { PokemonList, Pokemon } from "../../Utils/services";
import { PaginationProps } from "../../Utils/services";
import Pagination from "../Pagination/Pagination";

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurentPage] = useState<number>(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState<number>(20);

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
  // Pagination Function
  const paginate = (number: number) => {
    setCurentPage(number);
  };
  useEffect(() => {
    getPokemonList();
  }, []);
  // Get the page we are in
  const lastPageIndex = currentPage * pokemonsPerPage;
  const firstPageIndex = lastPageIndex - pokemonsPerPage;
  const currentPokemons = pokemonList.slice(firstPageIndex, lastPageIndex);
  return (
    <div>
      {loading ? (
        <div className="loading-text">Loading Pokemon</div>
      ) : (
        <div>
          <div className="home-page-header">
            <div className="switch ">
              <label>{theme ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch
                checked={theme}
                onChange={() => {
                  setTheme(!theme);
                }}
              />
            </div>
            <SearchButton />
          </div>
          <SearchModal />
          <div className="pokemon-container">
            {currentPokemons.map((pokemon, index) => (
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
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={pokemonList.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};
export default Home;
