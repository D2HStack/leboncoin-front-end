import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Signup({ isLogged, setIsLogged }) {
  const [pseudo, setPseudo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [isChecked, setIsChecked] = useState(false);
  let history = useHistory();

  return (
    <>
      <div className="signup-container">
        <div>
          <h2>Pourquoi créer un compte</h2>
          <div>
            <i className="far fa-clock"></i>
            <div>
              <h3>Gagnez du temps</h3>
              <p>
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </div>
          </div>
          <div>
            <i className="fas fa-bell"></i>
            <div>
              <h3>Soyez les premiers informés</h3>
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce
                qui vous intéresse.
              </p>
            </div>
          </div>
          <div>
            <i className="far fa-eye"></i>
            <div>
              <h3>Visibilité</h3>
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus).
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1>Créez un compte</h1>
          <form>
            <div>
              <p>Pseudo*</p>
              <input
                type="text"
                value={pseudo}
                onChange={event => {
                  setPseudo(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <p>Adresse email*</p>
              <input
                type="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <p>Mot de passe*</p>
              <input
                type="password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              ></input>
              <p>Confirmer le mot de passe*</p>
              <input
                type="password"
                value={confirm}
                onChange={event => {
                  setConfirm(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => setIsChecked(!isChecked)}
              ></input>
              <span>
                "J'accepte les Conditions Générales de Vente et les Conditions
                Générales d'utilisation
              </span>
            </div>
            <button
              type="submit"
              onClick={async () => {
                // prevent default of form
                const element = document.querySelector("form");
                element.addEventListener("submit", event => {
                  event.preventDefault();
                });
                if (!isChecked) {
                  alert("Veuillez accepter les conditions générales.");
                }
                // check if password === confirm and all fields are filled
                else if (
                  password === confirm &&
                  password &&
                  confirm &&
                  pseudo &&
                  email
                ) {
                  // post information to server and get token
                  try {
                    const response = await axios.post(
                      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
                      { email, username: pseudo, password }
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
                      alert("problème avec les serveur ! ");
                    }
                  } catch (err) {
                    console.log(err);
                  }
                } else {
                  alert("Veuillez remplir les champs.");
                }
              }}
            >
              Créer mon compte personnel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
