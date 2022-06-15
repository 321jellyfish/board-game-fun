import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>
        <Link to="/">Board Game Fun</Link>
      </h1>
      <p>Rate, discuss and find out about your favourite board games</p>
      <p>
        <span className="bold">Logged in as:</span> {user}
      </p>
    </header>
  );
};

export default Header;
