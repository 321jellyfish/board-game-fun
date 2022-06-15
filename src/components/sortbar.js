const SortBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="sort-form" onSubmit={handleSubmit}>
      <label htmlFor="sort">Sort by:</label>
      <select name="sort" id="sort">
        <option>none</option>
        <option>Date</option>
        <option>Comment count</option>
        <option>Votes</option>
      </select>

      <button>Submit</button>
    </form>
  );
};

export default SortBar;
