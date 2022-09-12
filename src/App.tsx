import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home"
import LoginForm from "./Components/LoginPage/LoginForm";
import { useContext } from "react";
import { AppContextProvider } from "./AppContext/AppContext";
import { AppContext } from "./AppContext/AppContext";

function App() {
  const { theme } = useContext(AppContext);
  return (
    <AppContextProvider>
      <div id={!theme ? "dark" : "light"}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
