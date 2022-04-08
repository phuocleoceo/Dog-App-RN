import queryString from 'query-string';
import axios from 'axios';

const BASE_URL = "https://raw.githubusercontent.com/";

const callAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
});

callAPI.interceptors.request.use((config) =>
{
    console.log(">> Load Dog from API");
    return config;
}, (error) =>
{
    return Promise.reject(error);
});

callAPI.interceptors.response.use((response) =>
{
    return response;
}, async (error) =>
{
    console.log(">> Error when get dog from API");
    return Promise.reject(error);
});

export default callAPI;