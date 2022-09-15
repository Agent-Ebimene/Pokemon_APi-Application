import React, { createContext, useState } from "react";
import { AppContextProps } from "../../Utils/services";
import { ProviderProps } from "../../Utils/services";
export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        authenticated,
        setAuthenticated,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
