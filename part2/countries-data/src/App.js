import { useState, useEffect } from 'react';
import countriesService from './services/countriesService';
import Search from './components/Search';
import Result from './components/Result';
function App() {

  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);



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
  }, [query]);


  if (!countries) {
    return <div>Loading...</div>;
  }

  const handleSearch = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div>
      <Search value={query} handleSearch={handleSearch} />
      {filteredCountries && <Result countries={filteredCountries} />}
    </div>
  );
}

export default App;
