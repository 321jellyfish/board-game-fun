import { useState, useEffect } from "react";
import { fetchCategories } from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Choose category:</label>
      <select name="category" id="category">
        {categories.map(({ slug }) => {
          return <option value={slug}>{slug}</option>;
        })}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Nav;
