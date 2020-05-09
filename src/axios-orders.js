import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-3eb9e.firebaseio.com/'
});

export default instance;