import React, { Component } from 'react';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import MyProgression from './components/Pages/MyProgression';
import Signup from './components/Pages/Sign-up';
import Workouts from './components/Pages/Workouts';
import Greetings from './components/Pages/Greetings';
import Information from './components/Pages/Information';
import Services from './components/Pages/Services';
import Core from './components/Pages/Core';
import Legs from './components/Pages/Legs';
import NewPassword from './components/Pages/NewPassword';

class App extends Component {
    render() {

        var Navbar;
        var url = window.location.pathname;
        if (url === '/') {
            Navbar = Navbar2;
        } else {
            Navbar = Navbar1;
        }

        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Greetings} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/myProgression" exact component={MyProgression} />
                    <Route path="/sign-up" exact component={Signup} />
                    <Route path="/workouts" exact component={Workouts} />
                    <Route path="/information" exact component={Information} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/core" exact component={Core} />
                    <Route path="/legs" exact component={Legs} />
                    <Route path="/modify" exact component={NewPassword} />
                </Switch>
            </Router>
        );
    }
}

export default App;
