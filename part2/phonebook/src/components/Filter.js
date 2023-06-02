
const Filter = ({ searchTerm, handleSearchChange }) => {

    return (
        <input onChange={handleSearchChange} value={searchTerm} />
    )
}

export default Filter