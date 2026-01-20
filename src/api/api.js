import axios from 'axios';
import { cities, trains, seatsData } from './mockData';

const api = axios.create({
    baseURL: 'https://netology-trainbooking.netoservices.ru',
});


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCities = async (name) => {
    await delay(300);
    return cities.filter(city => city.name.toLowerCase().includes(name.toLowerCase()));
};

export const getLastTickets = async () => {
    await delay(300);
    return trains.items.slice(0, 3);
};

export const getRoutes = async (params) => {
    await delay(500);
    console.log('API getRoutes params:', params);
    return trains;
};

export const getSeats = async (id, params) => {
    await delay(500);
    console.log('API getSeats:', id, params);
    return seatsData;
};

export const orderTickets = async (data) => {
    await delay(1000);
    console.log('API orderTickets:', data);
    return { status: true };
};

export const subscribeToNewsletter = async (email) => {
    await delay(500);
    console.log('API subscribe:', email);
    return { status: true };
};

export default api;

