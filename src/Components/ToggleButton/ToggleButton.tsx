import { useContext } from "react";
import ReactSwitch from "react-switch";
import { AppContext } from "../../AppContext/AppContext";

function ToggleButton() {
  const { theme, setTheme } = useContext(AppContext);

  const handleSwitch = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <div className="switch ">
      <label>{theme === "dark" ? "Light Mode" : "Dark Mode"}</label>
      <ReactSwitch
        checked={theme === "dark"}
        onChange={handleSwitch}
        className="toggle-btn"
      />
    </div>
  );
}

export default ToggleButton;
