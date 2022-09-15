export interface AppContextProps {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface Pokemon {
  id: number;
  url: string;
  name: string;
  sprites: {
    back_default: string;
  };
  setDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PaginationProps {
  pokemonsPerPage: number;
  totalPokemons: number;
  paginate: (number: number) => void;
}
