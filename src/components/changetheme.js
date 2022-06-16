import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const ChangeTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((currTheme) => {
      return currTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <button onClick={changeTheme} className={theme}>
      Change theme
    </button>
  );
};

export default ChangeTheme;
