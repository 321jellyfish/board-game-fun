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

        <button>Submit</button>
      </form>
      <form className="order-form" onSubmit={handleOrderChange}>
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

        <button>Submit</button>
      </form>
    </>
  );
};

export default SortBar;
