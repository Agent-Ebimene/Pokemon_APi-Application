import React, { createContext, useState } from "react";
import { ProviderProps } from "../../Utils/services";
import { Pokemon } from "../../Utils/services";
import { AppContextProps } from "../../Utils/services";

export const AppContext = createContext({} as AppContextProps);
export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isPokemonClicked, setIsPokemonClicked] = useState<boolean>(false);
  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }
  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        theme,
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
