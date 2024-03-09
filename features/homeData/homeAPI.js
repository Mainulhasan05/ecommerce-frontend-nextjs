import axiosInstance from '../../utils/axiosInstance';
import Cookies from 'js-cookie';

export const getHomeData = async () => {
    try {
        const response = await axiosInstance.get('/api');
        return response.data;
    } catch (error) {
        throw error;
    }
    };

