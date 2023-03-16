import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aaf948d4b7f84a8db427898cf0d32392'
    }
});