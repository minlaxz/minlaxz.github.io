import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
/* Impure */
const checkValidation = () => {
    try {
        const tokenObject = JSON.parse(localStorage.getItem("ggwp_user"));
        if (tokenObject?.expireDate > Date.now()) {
            return false;
        } else {
            return true; /* unauthorized */
        }
    } catch (error) {
        return true; /* unauthorized */
    }

}

const Dashboard = () => {

    const authUser = useSelector(state => state.authUser);

    if (checkValidation()) {
        /* there is a token and it is not expired. */
        return <Redirect to="/login" />
    }

    return (
        <>
            <h3>Welcome to Dashboard</h3>
            <p>Your ID is {authUser.userState.token} </p>
            <button onClick={() => {
                localStorage.removeItem("ggwp_user")
            }}>logout</button>
        </>
    );
}

export default Dashboard;