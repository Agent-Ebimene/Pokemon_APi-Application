import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../Home/Home";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

const PokemonCard: React.FC<Pokemon> = ({
  name,
  url,
  id,
  sprites,
  setDetailsOpen,
}) => {
  // const navigate = useNavigate();
  // navigate("details");
  const handlePokemonInfo = () => {
    setDetailsOpen(!setDetailsOpen);
  };
  return (
    <div className="single-pokemon" onClick={handlePokemonInfo}>
      <h3> {name}</h3>
      <img src={sprites.back_default} alt={name}></img>
    </div>
  );
};

export default PokemonCard;
