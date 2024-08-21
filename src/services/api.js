import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user sign-up
export const signUp = (userData) => apiClient.post('/users/signup', userData);
export const login = (credentials) => apiClient.post('/users/login', credentials);
/*
export const listCategories = () => apiClient.get('/categories');
export const listServices = () => apiClient.get('/services');
export const addReservation = (reservationData) => apiClient.post('/reservations', reservationData);
export const getReservations = (userId) => apiClient.get(`/reservations/${userId}`);
*/
