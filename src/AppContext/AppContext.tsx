import React, { createContext, useState } from "react";
import { ProviderProps } from "../utils/types";
import { AppContextProps } from "../utils/types";

export const AppContext = createContext({} as AppContextProps);
export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isPokemonClicked, setIsPokemonClicked] = useState<boolean>(false);
  interface ToggleProps {
    toggleTheme: (value: number) => void;
  }

  return (
    <AppContext.Provider
      value={{
        theme,

        setTheme,
        authenticated,
        setAuthenticated,
        modalOpen,
        setModalOpen,
        isPokemonClicked,
        setIsPokemonClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
