import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Board Game Fun</Link>
      </h1>
      <p>Rate, discuss and find out about your favourite board games</p>
    </header>
  );
};

export default Header;
