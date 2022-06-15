import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SortBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [currentlySelectedSortBy, setCurrentlySelectedSortBy] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const lowerCaseCurrentlySelectedSortBy =
      currentlySelectedSortBy.toLowerCase();
    let params = `?sort_by=${lowerCaseCurrentlySelectedSortBy}`;
    setSearchParams(params);
  };

  return (
    <form className="sort-form" onSubmit={handleSubmit}>
      <label htmlFor="sort">Sort by:</label>
      <select
        name="sort"
        id="sort"
        onChange={(event) => {
          setCurrentlySelectedSortBy(event.target.value);
        }}
      >
        <option>none</option>
        <option>Date</option>
        <option>Votes</option>
      </select>

      <button>Submit</button>
    </form>
  );
};

export default SortBar;
