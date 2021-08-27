import { NormalContainer } from '@/Components/Containers';
import { ToLogin } from '@/Routes/';
import { Form, EmailInput, PasswordInput, SignUpButton, UserNameInput } from './styles';
import React from 'react';
import { ToHome } from '@/Routes/';

const SignUp = () => {
    return (
        <NormalContainer>
            <Form onSubmit={() => alert(0)}>
            <ToHome cusName="Go HOME 🏡"/>
                <div>
                    {/* <label htmlFor="username">Your Name : &nbsp;</label> */}
                    <UserNameInput type="text" name="username" id="username" placeholder="Your Name"/>
                </div>
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
                    <SignUpButton type="submit">Submit</SignUpButton>
                </div>
            <ToLogin cusName="Already have an account ?"/>
            </Form>
        </NormalContainer>
        
    )
}

export default SignUp;