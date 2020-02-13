import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Signin({ isLogged, setIsLogged }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();

  return (
    <>
      <div className="signin-container">
        <h1>Connexion</h1>
        <hr></hr>
        <form>
          <div>
            <p>Adresse email</p>
            <input
              type="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <p>Mot de passe</p>
            <input
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <button
            type="submit"
            onClick={async () => {
              // prevent default of form
              const element = document.querySelector("form");
              element.addEventListener("submit", event => {
                event.preventDefault();
              });

              // post information to server and get token
              try {
                const response = await axios.post(
                  "https://leboncoin-api.herokuapp.com/api/user/log_in",
                  { email, password }
                );
                console.log(response);
                // if token valid then save it to cookie status ===200
                const { data, status } = response;
                const { token } = data;
                if (token && status === 200) {
                  Cookies.set("token", token, { expires: 1 });
                  alert("cookies written");
                  // change avatar to disconnect
                  setIsLogged(true);
                  // redirect to offers
                  history.push("/offers");
                } else {
                  alert("identifiants non valides ");
                }
              } catch (err) {
                alert("identifiants non valides ");
              }
            }}
          >
            Se connecter
          </button>
        </form>
        <hr></hr>
        <p>Vous n'avez pas de compte ?</p>
        <button
          onClick={() => {
            // redirect to signup
            history.push("/signup");
          }}
        >
          Créer un compte
        </button>
      </div>
    </>
  );
}

export default Signin;
