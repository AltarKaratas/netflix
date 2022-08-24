import React from 'react';

import { Header } from '../components'
import * as ROUTES from '../constants/routes'

import { useAuthListener } from '../hooks';

import logo from '../logo.png'

export function HeaderContainer({ children }) {
    const user = useAuthListener();

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
                {
                    !user && <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                }
            </Header.Frame>
            {children}
        </Header>
    )
};
