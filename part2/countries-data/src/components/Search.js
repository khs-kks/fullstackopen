const Search = ({ value, handleSearch, selectedCountry }) => {
    return (
        <>
            {!selectedCountry && (
                <>
                    <label htmlFor="search-input">Find countries</label>
                    <br />
                    <input id="search-input" type="text" value={value} onChange={handleSearch} />

                </>
            )}


        </>
    );
}

export default Search;