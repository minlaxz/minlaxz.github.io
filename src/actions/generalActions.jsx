import axios from 'axios';
import { mainBranchEndpoint } from '@/api';

export const getLastCommitOnMain = () => async (dispatch) => {
    try {
        const res = await axios.get(mainBranchEndpoint);
        dispatch({
            type: 'GET_LAST_COMMIT_SUCCESS',
            payload: { sha: res.data.commit.sha }
        });
    } catch (error) {
        dispatch({
            type: 'GET_LAST_COMMIT_FAILURE',
            payload: { error: error.message }
        });
    }
}


export const updateLastVistedTime = () => async (dispatch) => {
    try {
        dispatch({
            type: 'UPDATE_LAST_VISITED_TIME_SUCCESS',
            payload: { lastVisitedTime: new Date() }
        });
    } catch (error) {
        dispatch({
            type: 'UPDATE_LAST_VISITED_TIME_FAILURE',
            payload: { error: error.message }
        });
    }
}