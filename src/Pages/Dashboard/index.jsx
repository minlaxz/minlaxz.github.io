import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NormalContainer } from '@/Components/Containers';
import { logout } from '@/actions/userAuthActions';
import { ToHome } from '@/Routes/';

const Dashboard = () => {
    const dispatch = useDispatch();
    const [redirect, setRedirect] = React.useState(null);

    const [userInState, setUserInState] = React.useState(false);
    const [userInStorage, setUserInStorage] = React.useState(false);

    const authUser = useSelector(state => state.authUser);

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const checkValidation = () => {
        try {
            const tokenObject = JSON.parse(localStorage.getItem("ggwp_user"));
            if (tokenObject?.expireDate > Date.now()) {
                setRedirect(null);
            } else {
                setRedirect("/login"); /* unauthorized */
            }
        } catch (error) {
            setRedirect("/login"); /* unauthorized */
        }
    }

    /* authUser and UseEffect to rerender the page. */
    React.useEffect(() => {
        // if (authUser.userState.token) {
        //     setRedirect("/login")
        // }
        checkValidation();

    }, [checkValidation])

    return (
        redirect
            ? <Redirect to={redirect} />
            :
            <NormalContainer>
                <ToHome cusName="Home" />
                <button onClick={(e) => handleLogout(e)}>Logout</button>
            </NormalContainer>
    )
}

export default Dashboard;