import React from "react";
// import logo from src
import logo from "../assets/img/logo-leboncoin.png";
import { useHistory } from "react-router-dom";

// import components
import IconText from "../components/IconText";

function Header({ isLogged, setIsLogged }) {
  // let history = useHistory();
  return (
    <>
      <div className="header-bg">
        <div className="header-container">
          <div className="header-left">
            <img alt="leboncoin-logo" className="header-logo" src={logo} />
            <button type="button" className="header-button-post-classified">
              <div>
                <i className="far fa-plus-square"></i>
                <span>Déposer une annonce</span>
              </div>
            </button>
            <div className="header-search">
              <i className="fas fa-search"></i>
              <span>Rechercher</span>
            </div>
          </div>
          <div className="header-right">
            <IconText icon="far fa-bell" text="Mes recherches"></IconText>
            <IconText icon="far fa-heart" text="Mes favoris"></IconText>
            <IconText icon="far fa-comment-alt" text="Messages"></IconText>
            <div
              onClick={() => {
                if (isLogged) {
                  setIsLogged(false);
                  // history.push("/signin");
                } else {
                  // history.push("/signin");
                }
              }}
            >
              <IconText
                icon="far fa-user"
                text={isLogged ? "seDéconnecter" : "Se connecter"}
              ></IconText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
