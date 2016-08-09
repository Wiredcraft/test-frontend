export const BASE_URL = `${process.env.NODE_ENV === 'test' ? `http://localhost/api` : ''}/api`;

export const GET_REGION = `${BASE_URL}/region`
