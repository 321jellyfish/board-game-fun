import { useEffect, useState } from "react";
import { fetchCategories, removeHyphen } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const Nav = () => {
  const { theme } = useContext(ThemeContext);
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
    if (chosenCategory === "none") {
      navigate("/");
    } else {
      navigate(`/${chosenCategory}`);
    }
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="choose-category">Choose category:</label>
        <select
          name="choose-category"
          id="choose-category"
          onChange={(event) => {
            setCurrentlySelectedCategory(event.target.value);
          }}
        >
          <option>none</option>
          {categories.map(({ slug }) => {
            return (
              <option value={slug} key={slug}>
                {removeHyphen(slug)}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            setChosenCategory(currentlySelectedCategory);
          }}
        >
          Submit
        </button>
      </form>
    </nav>
  );
};

export default Nav;
