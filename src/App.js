import React, {Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import MyProgression from './components/Pages/MyProgression';
import Signup from './components/Pages/Sign-up';
import Workouts from './components/Pages/Workouts';
import Log_in from './components/Pages/Log_in';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/myProgression" component={MyProgression} />
                    <Route path="/sign-up" component={Signup} />
                    <Route path="/workouts" component={Workouts} />
                    <Route path="/log_in" component={Log_in} />
                </Switch>
            </Router>
        );
    }
}

export default App;
