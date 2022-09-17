import React from "react";
import { useState } from "react";
import { useContext } from "react";
import PokemonImage from "../../Assets/images/pokemon-bg.jpg";
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../AppContext/AppContext';
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const navigate = useNavigate();

  const { setAuthenticated, theme } = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic Form validation
    const name = userName.trim();
    if (!name && !password) {
      setNameError(true);
      setPasswordError(true);
    } else if (name && !password) {
      setNameError(false);
      setPasswordError(true);
    } else if (!name && password.length > 6) {
      setNameError(true);
      setPasswordError(false);
    } else if (!name && password.length < 6) {
      setNameError(true);
      setPasswordError(true);
    } else if (name && password.length < 6) {
      setNameError(false);
      setPasswordError(true);
    } else {
      navigate("./home");
      setAuthenticated(true);
    }
  };

  return (
    <div className="login-form-container" id={theme}>
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
        {nameError && <p className="error">Name Cannot be empty</p>}
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
        {passwordError && (
          <p className="error">Password should have atleast 6 characters</p>
        )}
        <button className={`login-btn`} type="submit">
          Login
        </button>
        <ToggleButton />
      </form>
    </div>
  );
};

export default LoginForm;
