import api from '../interceptor/axios';

export const sendPost = async (url, data) => {
    try {
        const response = await api.post(url, data)
        return response
    } catch (error) {
        return error.response
    }
}

