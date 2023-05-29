import axios from 'axios';

export const getCompanies = () => {
  return axios.get('http://localhost:5000/companies')
    .then(response => response.data)
    .catch(error => console.error('Error:', error));
};