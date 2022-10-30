import axios from 'axios';
import { testCallRequest, testCallSuccess, testCallFailure } from '@/app/features/testcall';

export const testCall = () => async dispatch => {
    dispatch(testCallRequest());
    try {
        const response = await axios.get('https://super-duper-laxz-69.fly.dev/api/test/', {
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