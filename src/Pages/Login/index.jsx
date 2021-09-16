import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { Form, Input, LoginButton } from './styles';
import { ToSignup } from '@/Routes/';
import { ToHome } from '@/Routes/';
// import UnderConstruct from '@/Components/UnderConstruct';
// import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/actions/userAuthActions';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import UnderConstruct from '@/Components/UnderConstruct';


const Login = () => {
    const dispatch = useDispatch();
    const [redirect, setRedirect] = React.useState(null);
    const [disabled, setDisabled] = React.useState(false);
    const [data, setData] = React.useState({ email: "", password: "" });

    const checkValidation = () => {
        try {
            const tokenObject = JSON.parse(localStorage.getItem("ggwp_user"));
            if (tokenObject?.expireDate > Date.now()) {
                setRedirect("/dashboard")
            } else {
                setRedirect(null)
            }
        } catch (error) {
            /* ggwp broken */
            console.log(error)
            setRedirect(null)
        }
    }

    const handleSubmit = async (e) => {
        if (!disabled) {
            e.preventDefault();
            dispatch(login(data.email, data.password));
        }
    }

    const authUser = useSelector(state => state.authUser);
    React.useEffect(() => {
        checkValidation();
        // if (isEmail(data.email) && data.password.length >= 6) {
        /* form is valid and can be submitted */
        //     setDisabled(false);
        //     setError({ email: "", password: "" });
        // } else {
        //     setDisabled(true);
        //     setError({ email: isEmail(data.email) ? "" : "Email is not valid", password: data.password.length >= 6 ? "" : "Password must be at least 6 characters" });
        // }
    }, [checkValidation])

    return (
        redirect
            ? <Redirect to={redirect} />
            :
            <NormalContainer>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    {
                        authUser.reqState.success || <small>{authUser.reqState.message}</small>
                    }
                    <UnderConstruct />
                    <ToHome cusName="Go HOME 🏡" />
                    <input type="hidden" name="_csrf" value="" ></input>
                    <div>
                        <Input onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Enter email" />
                    </div>
                    <div>
                        {/* <label htmlFor="pw">Password : &nbsp;</label> */}
                        <Input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} placeholder="Enter Password" />
                    </div>
                    <div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            axios.get("http://localhost:3001/", { withCredentials: true }).then(res => { console.log(res) }).catch(err => { console.log(err) })
                        }}
                        >Get CSRF</button>
                    </div>
                    <div>
                        <LoginButton type="submit" disabled={disabled}>Submit</LoginButton>
                    </div>
                    <ToSignup cusName="Don't have an account ?" />
                </Form>
            </NormalContainer>
    )
}

export default Login;