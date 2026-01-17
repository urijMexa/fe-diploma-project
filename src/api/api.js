import axios from 'axios';

const api = axios.create({
    baseURL: 'https://netology-trainbooking.netoservices.ru',
});

export const getCities = async (name) => {
    const response = await api.get(`/routes/cities?name=${name}`);
    return response.data;
};

export const getLastTickets = async () => {
    const response = await api.get('/routes/last');
    return response.data;
};

export const getRoutes = async (params) => {
    const response = await api.get('/routes', { params });
    return response.data;
};

export const getSeats = async (id, params) => {
    const response = await api.get(`/routes/${id}/seats`, { params });
    return response.data;
};

export const orderTickets = async (data) => {
    const response = await api.post('/order', data);
    return response.data;
};

export const subscribeToNewsletter = async (email) => {
    const response = await api.post('/subscribe', { email });
    return response.data;
};

export default api;
