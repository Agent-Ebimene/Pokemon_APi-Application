import React, { createContext, useState } from "react";
interface AppContextProps {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ProviderProps {
  children: React.ReactNode;
}
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
