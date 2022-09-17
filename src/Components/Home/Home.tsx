import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useEffect, useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import SearchModal from "../PokemonCard/Modal/SearchModal";
import PokemonCard from "../PokemonCard/PokemonCard";
import ReactSwitch from "react-switch";
import { SearchProps } from "../../Utils/services";
import { Pokemon } from "../../Utils/services";
import Pagination from "../Pagination/Pagination";
import { Outlet, Navigate } from "react-router-dom";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurentPage] = useState<number>(1);
  const [pokemonsPerPage] = useState<number>(20);
  const [searchValue, setSearchValue] = useState<string | null>();

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const { authenticated, theme, setTheme } = useContext(AppContext);

  //function to get pokemons

  const getPokemonList = async () => {
    try {
      const listResponse = await fetch(URL);
      const res = await listResponse.json();
      res.results.forEach(async (pokemon: Pokemon) => {
        const data = await fetch(pokemon.url);
        const res = await data.json();
        console.log(res);
        setPokemons((item) => {
          item = [...item, res];
          return item.sort((a, b) => (a.id > b.id ? 1 : -1));
        });
      });
      console.log(pokemons);
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
  const currentPokemons = pokemons.slice(firstPageIndex, lastPageIndex);
  if (!authenticated) {
    return <Navigate to="/" />;
  }
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
                abilities={pokemon.abilities}
                types={pokemon.types}
              />
            ))}
          </div>
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={pokemons.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};
export default Home;
