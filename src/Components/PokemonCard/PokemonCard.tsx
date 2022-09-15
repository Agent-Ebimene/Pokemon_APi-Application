import React from "react";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../Utils/services";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import { Link } from "react-router-dom";

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
    <div className="single-pokemon">
      <Link to={`home/${name}`} className="card-link">
        <h3> {name}</h3>
      </Link>
      <Link to={`home/${id}`} className="card-link">
        <img src={sprites.back_default} alt={name}></img>
      </Link>
    </div>
  );
};

export default PokemonCard;
