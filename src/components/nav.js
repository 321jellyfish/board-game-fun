const Nav = () => {
  return (
    <form>
      <label for="category">Choose category:</label>
      <select name="category" id="category">
        <option value="strategy">Strategy</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Nav;
