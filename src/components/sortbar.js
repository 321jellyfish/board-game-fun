import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const SortBar = ({ setSubmittedOrderBy, setSubmittedSortBy }) => {
  const { theme } = useContext(ThemeContext);
  const [currentlySelectedSortBy, setCurrentlySelectedSortBy] =
    useState("created_at");

  const [currentlySelectedOrderBy, setCurrentlySelectedOrderBy] =
    useState("desc");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedSortBy(currentlySelectedSortBy);
  };

  const handleOrderChange = (event) => {
    event.preventDefault();
    setSubmittedOrderBy(currentlySelectedOrderBy);
  };

  return (
    <section
      className={theme === "light" ? "sort-container" : "sort-container-dark"}
    >
      <form className="sort-form" onSubmit={handleSubmit}>
        <div className="sort-form-label">
          <label htmlFor="choose-sort">Sort by:</label>
          <select
            name="choose-sort"
            id="choose-sort"
            onChange={(event) => {
              setCurrentlySelectedSortBy(event.target.value);
            }}
          >
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      <form className="order-form" onSubmit={handleOrderChange}>
        <div className="sort-form-label">
          <label htmlFor="choose-order">Sort by:</label>
          <select
            name="choose-order"
            id="choose-order"
            onChange={(event) => {
              setCurrentlySelectedOrderBy(event.target.value);
            }}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default SortBar;
