// eslint-disable-next-line
import axios from 'axios';
import { searchParams } from '../../data.d';

// Create instance called instance
const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET',
    'content-type':'application/json'
    }
});

export async function getPictures (params?: searchParams) {
    return instance.get('/pictures', {
        params
    });
}