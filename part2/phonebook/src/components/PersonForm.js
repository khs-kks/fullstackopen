const PersonForm = ({ handleSubmit, handleInputChange, handleNumberChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input onChange={handleInputChange} />
            </div>
            <div>
                number: <input onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
