import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.67.22.146:3333'
});

export default api;