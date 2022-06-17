import { Link } from "react-router-dom";
import UserBar from "./userbar";
import ChangeTheme from "./changetheme";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={theme === "light" ? "" : "dark-header"}>
      <div className={theme === "light" ? "top-bar" : "top-bar-dark"}>
        <ChangeTheme />
        <UserBar />
      </div>
      <h1>
        <Link to="/" className={theme === "light" ? "" : "dark-h1"}>
          Board Game Fun
        </Link>
      </h1>
      <p>Rate, discuss and find out about your favourite board games</p>
    </header>
  );
};

export default Header;
