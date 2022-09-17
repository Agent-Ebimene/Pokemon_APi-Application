import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../utils/types";

const PokemonCard: React.FC<Pokemon> = ({
  name,
  abilities,
  types,
  id,
  sprites,
}) => {
  const navigate = useNavigate();
  const handlePokemonInfo = () => {
    navigate(`/pokemon/details/${name}`, { state: {pokemon:{ name, id, sprites, abilities, types }}});
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
