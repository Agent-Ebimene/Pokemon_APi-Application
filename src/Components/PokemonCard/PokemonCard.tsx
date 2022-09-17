import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../Utils/services";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
// import { Link, Outlet } from "react-router-dom";
interface PokemonDetailsProp {
  getDetails: (id: number) => Pokemon[];
}

const PokemonCard: React.FC<Pokemon> = ({
  name,
  abilities,
  types,
  id,
  sprites,
}) => {
  const { isPokemonClicked, setIsPokemonClicked } = useContext(AppContext);

  const navigate = useNavigate();
  const handlePokemonInfo = () => {
    navigate(`/details`, { state: { name, id, sprites, abilities, types } });
  };
  return (
    <>
      <div className="single-pokemon">
        <h3 onClick={handlePokemonInfo}> {name}</h3>
        <img
          src={sprites.back_default}
          alt={name}
          onClick={handlePokemonInfo}
        ></img>
      </div>
    </>
  );
};

export default PokemonCard;
