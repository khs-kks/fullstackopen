// TODO Create a service that uses axios to get the data from the API at https://studies.cs.helsinki.fi/restcountries/api/all
// TODO and returns a list of countries as an array. The data I am interested in is the name of the country and its population.

import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

export default { getAll }