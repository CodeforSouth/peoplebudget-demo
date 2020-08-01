import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Profile from '../pages/Profile';
import MapView from '../pages/MapView';
import UserRegistration from '../pages/UserRegistration';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/login" component={Logout} />
                <Route path="/profile" component={Profile} />
                <Route path="/proposals" component={MapView} />
                <Route path="/register" component={UserRegistration} />
            </Switch>
        </Router>
    );
};

export default RouterComponent;
