import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/style.css";

import Header from "./components/Header";
import Search from "./components/Search";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Router>
        <Switch>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
