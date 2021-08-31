import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { Form, EmailInput, PasswordInput, LoginButton } from './styles';
import { ToSignup } from '@/Routes/';
import { ToHome } from '@/Routes/';
import UnderConstruct from '@/Components/UnderConstruct';

const Login = () => {
    return (
        <NormalContainer>
            <Form onSubmit={() => alert(0)}>
                <UnderConstruct />
                <ToHome cusName="Go HOME 🏡" />
                <div>
                    {/* <label htmlFor="exampleInputEmail1">Email address : &nbsp;</label> */}
                    <EmailInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {/* <small id="emailHelp">We'll never share your email with anyone else.</small> */}
                </div>
                <div>
                    {/* <label htmlFor="exampleInputPassword1">Password : &nbsp;</label> */}
                    <PasswordInput type="password" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Enter Password" />
                </div>
                <div>
                    <LoginButton type="submit">Submit</LoginButton>
                </div>
                <ToSignup cusName="Don't have an account ?" />
            </Form>
        </NormalContainer>

    )
}

export default Login;