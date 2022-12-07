import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';

const Router = () => (
    <BrowserRouter>
        <Route
            render={({ location }) => (
                <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/guides/:guide/:page" component={Detail} />
                    <Route exact path="/error" component={Error} />
                </Switch>
            )}
        />
    </BrowserRouter>
);

export default Router;
