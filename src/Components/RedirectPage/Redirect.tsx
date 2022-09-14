import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const Redirect = () => {
  const { authenticated } = useContext(AppContext);
  return (
    <div className="container-md">
      <h2>Please Login to explore this App</h2>
    </div>
  );
};

export default Redirect;
