import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import PokemonImage from "../../Assets/images/pokemon-bg.jpg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import ReactSwitch from "react-switch";

// interface Props {
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }
const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { setAuthenticated, setTheme, theme } = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("./home");
    setAuthenticated(true);
  };
  return (
    <div className="login-form-container">
      <div className="content-container">
        <img src={PokemonImage} alt="" className="pokemon-img" />
        <h3>Explore the pokemon API</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
          repudiandae?
        </p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your Password"
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="******"
          />
        </div>
        <Button
          className={`btn ${password.length >= 6 ? "add-cusor" : ""}`}
          type="submit"
          disabled={password.length < 6}
        >
          Login
        </Button>
        <div className="switch">
          <label>{theme ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch
            checked={theme}
            onChange={() => {
              setTheme(!theme);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
