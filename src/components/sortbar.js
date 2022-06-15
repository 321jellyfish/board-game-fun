import { useState, useEffect } from "react";

const SortBar = ({ setSearchParams }) => {
  const [currentlySelectedSortBy, setCurrentlySelectedSortBy] =
    useState("created_at");
  const [submittedSortBy, setSubmittedSortBy] = useState("created_at");

  const [currentlySelectedOrderBy, setCurrentlySelectedOrderBy] =
    useState("desc");
  const [submittedOrderBy, setSubmittedOrderBy] = useState("desc");

  useEffect(() => {
    setSearchParams({ sort_by: submittedSortBy, order_by: submittedOrderBy });
  }, [submittedSortBy, submittedOrderBy]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedSortBy(currentlySelectedSortBy);
  };

  const handleOrderChange = (event) => {
    event.preventDefault();
    setSubmittedOrderBy(currentlySelectedOrderBy);
  };

  return (
    <>
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
      <form className="order-form" onSubmit={handleOrderChange}>
        <label htmlFor="order">Sort by:</label>
        <select
          name="order"
          id="order"
          onChange={(event) => {
            setCurrentlySelectedOrderBy(event.target.value);
          }}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>

        <button>Submit</button>
      </form>
    </>
  );
};

export default SortBar;
