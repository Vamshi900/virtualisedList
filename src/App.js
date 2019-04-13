import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./app/Modules/Homepage/HomePage";
import Header from "./app/Modules/Header/Header";
import Footer from "./app/Modules/Footer/Footer";

class App extends Component {
  render() {
    // const routes = (
    //     <Link exact path="/home" component={HomePage} />
    //     <Link exact path="/" component={HomePage} />
    // );
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/test" component={HomePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
