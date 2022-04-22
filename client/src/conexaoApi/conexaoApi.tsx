import axios from 'axios';

const conexaoApi = axios.create({
  baseURL: 'http://localhost:8000/',
});

export default conexaoApi;