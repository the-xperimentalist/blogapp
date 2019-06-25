import axios from 'axios';

export const axiosAuthInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: { Authorization: `Bearer ${window.localStorage.token}` }
})

export const axiosUnauthInstance = axios.create({
  baseURL: 'http://localhost:8000/api/'
})

