import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { Form, Input, LoginButton } from './styles';
import { ToSignup } from '@/Routes/';
import { ToHome } from '@/Routes/';
// import UnderConstruct from '@/Components/UnderConstruct';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/actions/userAuthActions';
import { Redirect } from 'react-router-dom';

/* Impure */
const checkValidation = () => {
    try {
        const tokenObject = JSON.parse(localStorage.getItem("ggwp_user"));
        if (tokenObject?.expireDate > Date.now()) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        /* ggwp broken */
        return false;
    }
}

const Login = () => {

    const dispatch = useDispatch();
    const [disabled, setDisabled] = React.useState(true);
    const [data, setData] = React.useState({ email: "", password: "" });
    const [error, setError] = React.useState({ email: "", password: "" });

    const authUser = useSelector(state => state.authUser);

    const handleSubmit = async (e) => {
        if (!disabled) {
            e.preventDefault();
            dispatch(login(data.email, data.password));
        }
    }

    React.useEffect(() => {
        if (isEmail(data.email) && data.password.length >= 6) {
            // form is valid and can be submitted
            setDisabled(false);
            setError({ email: "", password: "" });
        } else {
            setDisabled(true);
            setError({ email: isEmail(data.email) ? "" : "Email is not valid", password: data.password.length >= 6 ? "" : "Password must be at least 6 characters" });
        }
    }, [data])

    if (checkValidation()) {
        /* there is a token and it is not expired. */
        return <Redirect to="/dashboard" />
    }
    return (
        <NormalContainer>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {
                    authUser.reqState.success
                        ? <small>{authUser.userState.token.slice(10)}</small>
                        : <small>{authUser.reqState.message}</small>
                }
                <ToHome cusName="Go HOME 🏡" />
                <div>
                    <Input onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Enter email" />
                </div>
                <div>
                    {/* <label htmlFor="pw">Password : &nbsp;</label> */}
                    <Input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Enter Password" />
                </div>
                <div>
                    <LoginButton type="submit" disabled={disabled}>Submit</LoginButton>
                </div>
                {
                    error.email || error.password ||
                    <p>
                        {error.email || error.password}
                    </p>
                }
                <ToSignup cusName="Don't have an account ?" />
            </Form>
        </NormalContainer>
    )
}

export default Login;