const Search = ({ value, handleSearch }) => {
    return (
        <>
        <label htmlFor="search">Look for a country: </label>
        <input id="search" type="text" value={value} onChange={handleSearch} />
        </>
    );
}

export default Search;