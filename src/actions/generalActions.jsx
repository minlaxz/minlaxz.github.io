import axios from 'axios';
import { mainBranchEndpoint } from '@/api';
import { toast } from 'react-toastify';
import { getLastCommitSuccess, getLastCommitFailure } from '@/Reducers/lastCommitSlice';

export const getLastCommitOnMain = () => async (dispatch) => {
    try {
        const res = await axios.get(mainBranchEndpoint);
        toast.success("Auto fetched and dispatched", {
            icon: "🚀",
            autoClose: 3000,
            theme: "colored"
        })
        dispatch(getLastCommitSuccess({ sha: res.data.commit.sha }));

    } catch (error) {
        toast.error(error.message)
        dispatch(getLastCommitFailure({ error: error.message }))
    }
}
