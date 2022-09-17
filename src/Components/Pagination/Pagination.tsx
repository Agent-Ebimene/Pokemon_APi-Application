import React from "react";
import { PaginationProps } from "../../utils/types";

const Pagination: React.FC<PaginationProps> = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 0; i < Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="pokemon-pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <button
              type="button"
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
