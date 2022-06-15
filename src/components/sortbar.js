import { useState, useEffect } from "react";

const SortBar = ({ searchParams, setSearchParams }) => {
  const [currentlySelectedSortBy, setCurrentlySelectedSortBy] =
    useState("created_at");
  const [submittedSortBy, setSubmittedSortBy] = useState("created_at");

  useEffect(() => {
    setSearchParams({ sort_by: submittedSortBy });
  }, [submittedSortBy]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedSortBy(currentlySelectedSortBy);
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
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
      </select>

      <button>Submit</button>
    </form>
  );
};

export default SortBar;
