import axios from 'axios';

export default axios.create({
    baseURL: 'http://localost:3500'
});