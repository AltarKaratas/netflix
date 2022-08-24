import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup} from './pages'
import * as ROUTES from './constants/routes';
import { RenderOnCondition } from "./helpers/routes";
import { useAuthListener } from './hooks';


export default function App() {

  const {user} = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={
          <RenderOnCondition
            condition={!user} 
            redirectIfFalse={ROUTES.BROWSE}>
              <Home />
          </RenderOnCondition>
        }/>
        <Route exact path={ROUTES.BROWSE} element={
          <RenderOnCondition 
            condition={user}
            redirectIfFalse={ROUTES.SIGN_UP}>
              <Browse />
          </RenderOnCondition>
        }/>
        <Route exact path={ROUTES.SIGN_IN} element={
          <RenderOnCondition 
            condition={!user}
            redirectIfFalse={ROUTES.BROWSE}>
              <Signin />
          </RenderOnCondition>
        }/>
        <Route exact path={ROUTES.SIGN_UP} element={
          <RenderOnCondition 
            condition={!user} 
            redirectIfFalse={ROUTES.BROWSE}>
              <Signup />
          </RenderOnCondition>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
