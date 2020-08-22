import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import MapView from '../pages/MapView';
import UserRegistration from '../pages/UserRegistration';
import Dashboard from '../pages/Dashboard';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/proposals" component={MapView} />
                <Route path="/register" component={UserRegistration} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default RouterComponent;
