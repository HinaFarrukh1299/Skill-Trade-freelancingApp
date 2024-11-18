import axios from 'axios';

const newRequest = axios.create({
    baseURL:"http://localhost:8105/api/", withCredentials:true,
});

export default newRequest;