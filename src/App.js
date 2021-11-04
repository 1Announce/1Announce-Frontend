import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Splash from './pages/SplashPage';
import Home from './pages/HomePage';

function App() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route>
                    <Splash />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
