import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const ErrorPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <p>
        <strong>This page does not exist</strong>
      </p>
      <Link to="/">Take me back to all reviews</Link>
    </>
  );
};

export default ErrorPage;
