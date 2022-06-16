import { Link } from "react-router-dom";

const ErrorPage = () => {
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
