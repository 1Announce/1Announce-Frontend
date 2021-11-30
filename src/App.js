import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Splash from './pages/SplashPage';
import Home from './pages/HomePage';
import MyForm from './pages/CreateAnnouncementPage';
import SignupPage from './pages/SignupPage'
import ForgotPassword from './components/ForgotPassword'
import {AuthProvider} from "./contexts/AuthContext"
import PrivateRoute from './components/PrivateRoute'
import CreateAnnouncementPage from "./pages/CreateAnnouncementPage";

function App() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
              <PrivateRoute exact path="/" component={Home}/>
              <Route path="/signin" component={Splash}/>
              <Route path="/signup" component={SignupPage}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
              <PrivateRoute exact path="/create" component={MyForm}/>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    );
}

export default App;
