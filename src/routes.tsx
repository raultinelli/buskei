import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import ProfissionaisMap from './pages/ProfissionaisMap';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={ProfissionaisMap} />
            </Switch>
        </BrowserRouter>        
    );
}

export default Routes;