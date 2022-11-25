import axios from 'axios';
import { testCallRequest, testCallSuccess, testCallFailure } from '@/app/features/testcall';

export const testCall = () => async dispatch => {
    dispatch(testCallRequest());
    const prodUrl = 'https://super-duper-laxz-69.fly.dev/api/test/';
    const devUrl = 'http://localhost:8000/api/test/';
    try {
        const response = await axios.get(devUrl, {
            withCredentials: true,
            timeout: 5000,
        });
        dispatch(testCallSuccess(response.data));
    } catch (error) {
        console.log(error)
        console.log(error.response);
        dispatch(testCallFailure({
            name: error.name,
            message: error.message,
            code: error?.response?.status,
        }));
    }
}