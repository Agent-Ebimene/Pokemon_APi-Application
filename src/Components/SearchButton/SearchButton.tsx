import React from "react";
const SearchButton = () => {
  return (
    <div className="search-btn">
      <button
        type="button"
        className="btn btn-primary pokemon-search-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Search Pokemon
      </button>
    </div>
  );
};

export default SearchButton;
