import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginPage/LoginForm";
import Redirect from "./Components/RedirectPage/Redirect";
import { useContext } from "react";
import { AppContextProvider } from "./Components/AppContext/AppContext";
import { AppContext } from "./Components/AppContext/AppContext";
import PokemonInfo from "./Components/PokemonInfo/PokemonInfo";

function App() {
  const { theme, authenticated } = useContext(AppContext);
  return (
    <AppContextProvider>
      <div id={theme ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<Home />}>
            <Route path="home/:id" element={<PokemonInfo />}></Route>
          </Route>
          <Route path="redirect" element={<Redirect />} />

          <Route
            path="home"
            element={!authenticated && <Navigate to="/" />}
          ></Route>
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
