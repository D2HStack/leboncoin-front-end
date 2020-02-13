import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Cookies from "js-cookie";

import "./assets/css/style.css";

import Header from "./components/Header";

import Footer from "./components/Footer";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";

function App() {
  const tokenValid = () => {
    return Cookies.get("token") !== undefined;
  };

  const [isLogged, setIsLogged] = useState(tokenValid());

  return (
    <div className="App">
      <Header isLogged={isLogged} setIsLogged={setIsLogged}></Header>
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup isLogged={isLogged} setIsLogged={setIsLogged} />
          </Route>
          <Route path="/signin">
            <Signin isLogged={isLogged} setIsLogged={setIsLogged} />
          </Route>
          {!isLogged && <Redirect to="/signin" />}
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
