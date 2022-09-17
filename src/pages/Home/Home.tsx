import React from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useEffect, useState } from "react";
import SearchButton from "../../Components/SearchButton/SearchButton";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import SearchModal from "../../Components/PokemonCard/Modal/SearchModal";

import { Pagination, PokemonItem } from "../../utils/types";
import { Pokemon } from "../../utils/types";
import { Navigate } from "react-router-dom";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import { getPokemonList, getPokemon } from "../../utils/ApiServices";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>({
    next: "",
    prev: "",
  });
  const [pageCount, setPageCount] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");

  const { authenticated, theme } = useContext(AppContext);

  const handlePagination = (mode: string) => {
    return () => {
      switch (mode) {
        case "next":
          if (pageCount === 7) {
            setPageCount(pageCount + 1);
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=150&limit=11");
          } else if (pageCount > 7) {
            return;
          } else {
            setUrl(pagination.next);
            setPageCount(pageCount + 1);
          }
          break;
        case "prev":
          if (pageCount === 0) {
            return;
          } else {
            setPageCount(pageCount - 1);
            setUrl(pagination.prev);
          }
          break;
        default:
          break;
      }
    };
  };

  useEffect(() => {
    (async () => {
      const pokemonList = await getPokemonList(url);

      if (pageCount === 8) {
        setPagination((prev: Pagination) => ({ next: "", prev: prev.prev }));
      } else {
        setPagination({ next: pokemonList.next, prev: pokemonList.previous });
      }

      const pendingPokemons: Promise<Pokemon>[] = [];

      pokemonList.results.map(async (pokemonItem: PokemonItem) => {
        pendingPokemons.push(getPokemon(pokemonItem.name));
      });

      setPokemons(await Promise.all(pendingPokemons));
      setLoading(false);
    })();
  }, [url, pageCount]);

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div id={theme}>
      {loading ? (
        <div className="loading-text">Loading Pokemon</div>
      ) : (
        <div>
          <div className="home-page-header">
            <ToggleButton />
            <SearchButton />
          </div>
          <SearchModal />
          <div className="pokemon-container">
            {pokemons.map((pokemon, index) => (
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
          <div className="pagination-con">
            <input
              onClick={handlePagination("prev")}
              className="btn btn-primary"
              type="button"
              value="Prev"
            ></input>
            <input
              onClick={handlePagination("next")}
              className="btn btn-primary"
              type="button"
              value="next"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
