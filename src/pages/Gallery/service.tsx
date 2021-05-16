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

export type pictureParams = {
    search?: string;
    page?: number;
};

export async function getPictures (params?: pictureParams) {
    return instance.get('/pictures', {
        params
    });
}