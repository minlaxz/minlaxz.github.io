import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { Form, Input, LoginButton } from './styles';
import { ToSignup } from '@/Routes/';
import { ToHome } from '@/Routes/';
import UnderConstruct from '@/Components/UnderConstruct';
import { isEmail } from 'validator';



const Login = () => {
    const [disabled, setDisabled] = React.useState(true);
    const [data, setData] = React.useState({ email: "", password: "" });
    const [error, setError] = React.useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        if (!disabled) {
            e.preventDefault();
            console.log("ok")
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
    return (
        <NormalContainer>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <UnderConstruct />
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