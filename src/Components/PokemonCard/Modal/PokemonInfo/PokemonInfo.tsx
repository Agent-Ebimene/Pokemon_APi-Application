import React from "react";
import { Pokemon } from "../../../../Utils/services";

const PokemonInfo: React.FC<Pokemon> = ({ name }) => {
  return (
    <div>
      <h1>Here are the details of the clicked Pokemon</h1>
    </div>
  );
};

export default PokemonInfo;
