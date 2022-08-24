import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

import * as ROUTES from '../constants/routes';


const validEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const validPasswordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/

export default function Signin(){
    const navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignin = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(getAuth(), emailAddress, password)
        .then(() => {
            navigate(ROUTES.BROWSE);
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    const isFormValid = 
        password.match(validPasswordPattern) && 
        emailAddress.match(validEmailPattern);

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>

                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={
                                (event) => setEmailAddress(event.target.value)
                            }
                        />
                        <Form.Input
                            type="password"
                            auto-complete="off"
                            placeholder="Password"
                            value={password}
                            onChange={
                                (event) => setPassword(event.target.value)
                            }
                        />
                        <Form.Submit disabled={!isFormValid} type="submit">
                            Submit
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTHCA to ensure you're handsome.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
