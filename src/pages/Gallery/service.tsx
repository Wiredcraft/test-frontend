// eslint-disable-next-line
import axios from 'axios';

// Create instance called instance
const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET',
    'content-type':'application/json'
    }
});

export async function getPictures () {
    return instance.get('/pictures');
}