import axios from 'axios';

const api = axios.create({
  baseURL: 'deezerdevs-deezer.p.rapidapi.com'
});

export default api;