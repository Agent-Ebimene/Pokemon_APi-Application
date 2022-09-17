import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LoginPage/LoginPage";
import { useContext } from "react";
import { AppContextProvider } from "./AppContext/AppContext";
import { AppContext } from "./AppContext/AppContext";
import PokemonInfo from "./pages/PokemonInfo/PokemonInfo";

function App() {
  const { theme } = useContext(AppContext);
  console.log(theme);

  return (
    <AppContextProvider>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="home" element={<Home />} />
            <Route path="pokemon/details/:name" element={<PokemonInfo />} />
          </Routes>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
