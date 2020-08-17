import React, { Component } from "react";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from './components/contact/Contact';
import './App.css';
//Import the Navigation component
import Navigation from "./components/navigation/Navigation";

import {Switch, Route} from "react-router-dom";
import Page from "./pages/404page";




class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Javier" />}
        />

        <Route
          path="/welcome/:name"
          render={(props) => <Welcome name= {props.match.params.name} />}
        />


        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component={Page} />
        </Switch>
      </div>
    );
  }
}
export default App;



