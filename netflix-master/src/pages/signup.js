import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

import * as ROUTES from '../constants/routes';


const validEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const validPasswordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/
const firstNamePattern = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i


export default function Signup(){
    const navigate = useNavigate();

    const auth = getAuth();
    
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
            updateProfile(userCredential.user, {
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5 + 1)
            }).then(() => {
                navigate(ROUTES.BROWSE);
            }).catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
        }).catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    const isFormValid = 
        firstName.match(firstNamePattern) &&
        password.match(validPasswordPattern) && 
        emailAddress.match(validEmailPattern);

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>

                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={
                                (event) => setFirstName(event.target.value)
                            }
                        />
                        <Form.Input
                            placeholder="Email address"
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
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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
