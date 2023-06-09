
const Result = ({ countries, handleShowCountry }) => {
  const multipleCountries = countries.length > 1 && countries.length <= 10;
  const singleCountry = countries.length === 1;

  return (
    <>
      {countries.length > 10 && (
        <div>
          <p>Too many matches, specify another filter.</p>
        </div>
      )}

      {multipleCountries && (
        <ul>
          {countries.map(country => (
            <li key={country.name.common}>
              <span>{country.name.common}</span>
              <button onClick={() => handleShowCountry(country)}>show</button>
            </li>
          ))}
        </ul>
      )}

      {singleCountry && (
        <div className="Country">
          <h1>{countries[0].name.common}</h1>
          <p>capital {countries[0].capital}</p>
          <p>area {countries[0].area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(countries[0].languages).map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img className="Country-img" src={countries[0].flags.png} alt={countries[0].name.common} />
        </div>
      )}
    </>
  );
};

export default Result