function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Type a name to search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;