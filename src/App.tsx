import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginPage/LoginForm";
import { useContext } from "react";
import { AppContextProvider } from "./Components/AppContext/AppContext";
import { AppContext } from "./Components/AppContext/AppContext";
import PokemonInfo from "./Components/PokemonInfo/PokemonInfo";

function App() {
  const { theme, authenticated } = useContext(AppContext);
  return (
    <AppContextProvider>
      <div id="light">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<Home />} />
          <Route path="details" element={<PokemonInfo />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
