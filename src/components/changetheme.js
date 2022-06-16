import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const ChangeTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <button onClick={changeTheme} className={theme} id="theme-button">
      {theme.charAt(0).toUpperCase() + theme.slice(1)} theme: ON
    </button>
  );
};

export default ChangeTheme;
