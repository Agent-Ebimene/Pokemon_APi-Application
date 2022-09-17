export interface AppContextProps {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  isPokemonClicked: boolean;
  setIsPokemonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface PokemonList {
  prev: string;
  results: {
    name: string;
    url: string;
  };
}

export interface Pagination {
  next: string;
  prev: string;
}

export interface PokemonItem {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  url: string;
  name: string;
  sprites: {
    back_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

export interface PaginationProps {
  pokemonsPerPage: number;
  totalPokemons: number;
  paginate: (number: number) => void;
}

export interface SearchProps {
  handleSearchPokemon: (params: any) => any;
  searchValue: boolean;
  setSearchValue: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
}

interface Chain {
  species: { name: string }
  evolves_to: Chain[]
}
export interface PokemonEvolutions {
  id: number,
  chain: Chain
}
