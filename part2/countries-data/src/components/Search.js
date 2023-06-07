const Search = ({ value, handleSearch }) => {
    return (
        <>
        <label htmlFor="search">Look for a country: </label>
        <input id="search" value={value} onChange={handleSearch} />
        </>
    );
}

export default Search;