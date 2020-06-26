import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import LoginForm from './loginForm';
import Dashboard from './dashboard';
import Logout from './logout';
import RegisterForm from './registerForm';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container mt-5">
            <Navbar />
            <Switch>
                <Route exact path="/" component={LoginForm}  />
                <Route path="/register" component={RegisterForm} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/logout" component={Logout}/>
            </Switch>
      </div>
    );
  }
}

export default App;
