import React from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const SearchButton = () => {
  return (
    <div className="search-btn">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Search Pokemon
      </button>
    </div>
  );
};

export default SearchButton;
