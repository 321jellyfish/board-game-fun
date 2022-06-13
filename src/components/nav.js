import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");
  const [currentlySelectedCategory, setCurrentlySelectedCategory] =
    useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${chosenCategory}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Choose category:</label>
      <select
        name="category"
        id="category"
        // onChange={(event) => {
        //   setChosenCategory(event.target.value);
        // }}
        onChange={(event) => {
          setCurrentlySelectedCategory(event.target.value);
        }}
      >
        {categories.map(({ slug }) => {
          return <option value={slug}>{slug}</option>;
        })}
      </select>
      {/* <input type="submit" value="Submit" /> */}
      <button
        onClick={() => {
          setChosenCategory(currentlySelectedCategory);
        }}
      >
        Change user
      </button>
    </form>
  );
};

export default Nav;
