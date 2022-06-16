import { Link } from "react-router-dom";
import UserBar from "./userbar";
import ChangeTheme from "./changetheme";

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <ChangeTheme />
        <UserBar />
      </div>
      <h1>
        <Link to="/">Board Game Fun</Link>
      </h1>
      <p>Rate, discuss and find out about your favourite board games</p>
    </header>
  );
};

export default Header;
