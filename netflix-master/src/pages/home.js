import React from 'react';
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';

export default function Home() {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>Unlimited porn, pedophilia, and more</Feature.Title>
                    <Feature.SubTitle>Jerk anywhere. Cancel at any time.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Email address"/>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
