import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup} from './pages'
import * as ROUTES from './constants/routes';
import { RenderOrRedirect, ProtectedRoutes } from "./helpers/routes";

export default function App() {

  const userLoggedIn = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={
          <Home />
        }/>
        <Route exact path={ROUTES.BROWSE} element={
          <RenderOrRedirect 
            condition={userLoggedIn} 
            pathToRedirect={ROUTES.SIGN_UP}>
              <Browse />
          </RenderOrRedirect>
        }/>
        <Route exact path={ROUTES.SIGN_IN} element={
          <RenderOrRedirect 
            condition={!userLoggedIn} 
            pathToRedirect={ROUTES.BROWSE}>
              <Signin />
          </RenderOrRedirect>
        }/>
        <Route exact path={ROUTES.SIGN_UP} element={
          <RenderOrRedirect 
            condition={!userLoggedIn} 
            pathToRedirect={ROUTES.BROWSE}>
              <Signup />
          </RenderOrRedirect>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
