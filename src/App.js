import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Blank from './components/Blank';
import Users from './components/Users';

class App extends Component {
    render() {
        return (
            <div className="container">
            <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="/Shop" component={Shop} />
                        <Route path="/Blank" component={Blank} />
                        <Route path="/Users" component={Users} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
