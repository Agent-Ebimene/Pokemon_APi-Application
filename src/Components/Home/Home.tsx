import React from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useEffect, useState } from "react";

// interface Props {
//   isLoggedIn: boolean;
// }
const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [disable, setDisable] = React.useState(true);

  const { authenticated } = useContext(AppContext);

  // const fetchPokemon = async () => {
  //   const url: string = "https://pokeapi.co/api/v2/pokemon?limit=151%27";
  //   const response = await fetch(url);
  //   const res = await response.json();
  //   console.log(res);
  //   setLoading(false);
  //   setPokemonList(res.data.results);
  // };

  // useEffect(() => {
  //   fetchPokemon();
  // }, []);
  return (
    <div>
      {authenticated ? (
        <h2>Fetching Data from API</h2>
      ) : (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <h2>Pokemon</h2>
          </nav>
          <div className="container">
            <div className="btn-div">
              <button type="button" disabled={disable} className="btn btn-func">
                Previous
              </button>
              &nbsp;&nbsp;
              <button type="button" className="btn btn-func">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
