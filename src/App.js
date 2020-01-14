import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists";
import Header from "./components/Header";
import Provider from "./context";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/addNew" component={Form}></Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
