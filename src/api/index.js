import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.shutterstock.com/',
    credentials: true,
    headers: {
        'Authorization': import.meta.env.VITE_API_TOKEN
    }
})

export default api