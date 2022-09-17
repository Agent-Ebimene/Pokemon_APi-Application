import React, { ChangeEvent, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { get151pokemons } from "../../utils/ApiServices";
import debounce from "../../utils/debounce";
import { PokemonItem } from "../../utils/types";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";

const SearchModal = () => {
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [result, setResult] = useState<PokemonItem[]>([]);

  const navigate = useNavigate();
  const { modalOpen, setModalOpen } = useContext(AppContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setResult([]);
      return;
    }
    const res = pokemons.filter((obj) =>
      Object.values(obj).some((val) =>
        val.includes(e.target.value.toLowerCase())
      )
    );
    setResult(res);
  };

  const navigateHandler = (name: string) => () => {
    navigate(`/pokemon/details/${name}`, { state: { path: name } });
    setModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      const pokemonList = await get151pokemons();
      setPokemons(pokemonList.results);
    })();
  }, []);
  return (
    <div
      className={`modal fade modal-dialog-scrollable`}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Seach Pokemon by name
            </h5>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
          <div className="modal-body">
            <div className="input-group">
              <div className="modal-form">
                <input
                  type="search"
                  id="form1"
                  placeholder="search pokemon"
                  className="form-control"
                  onChange={debounce(handleChange)}
                />
                <label className="form-label" htmlFor="form1">
                  <button type="button" className="btn btn-primary">
                    {" "}
                    <BsSearch />
                  </button>
                </label>
              </div>
            </div>
            {result.map((pokemon: PokemonItem) => (
              <h3
                className="search-items"
                data-bs-dismiss="modal"
                onClick={navigateHandler(pokemon.name)}
                key={pokemon.name}
              >
                {pokemon.name}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
