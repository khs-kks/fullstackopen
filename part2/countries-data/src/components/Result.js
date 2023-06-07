// TODO Write me a React component that receives a list of countries as an array.
// if the list is bigger than 10 countries, show only the first 10.
// render the list of countries as unordered list

const Result = ({ countries }) => {
    if (countries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter.</p>
            </div>
        )
    } else if (countries.length > 1 && countries.length <= 10) {
        return (
            <ul>
                {countries.map(country => <li key={country.name.common}>{country.name.common}</li>)}
            </ul>
        )
    } else if (countries.length === 1) {
        return (
            <div>
                <h1>{countries[0].name.common}</h1>
                <p>capital {countries[0].capital}</p>
                <p>area {countries[0].area}</p>
                <h2>Languages</h2>
                <ul>
                    {Object.values(countries[0].languages).map(language => <li key={language}>{language}</li>)}
                </ul>
                <img src={countries[0].flags.png} alt={countries[0].name.common} />
            </div>
        )
    }
}

export default Result