import { useState, useEffect } from 'react';
import countriesService from './services/countriesService';
import Search from './components/Search';
import Result from './components/Result';
// import './App.css';
function App() {

  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);


  useEffect(() => {
    countriesService.getAll()
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);



  useEffect(() => {
    if (countries) {
      const filtered = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()));
      setFilteredCountries(filtered);
    }
  }, [query, countries]);


  if (!countries) {
    return <div>Loading...</div>;
  }

  const handleSearch = (event) => {
    setQuery(event.target.value);
  }
  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <Search value={query} handleSearch={handleSearch} />
      {/* {filteredCountries && <Result countries={filteredCountries} />} */}
      {selectedCountry ? (
        <div>
          <button onClick={() => setSelectedCountry(null)}>back</button>
          <Result countries={[selectedCountry]} handleShowCountry={handleShowCountry} />
        </div>
      ) : (

        filteredCountries && <div className='Result'>
          <Result countries={filteredCountries} handleShowCountry={handleShowCountry} />
        </div>
      )}
    </div>
  );
}

export default App;
