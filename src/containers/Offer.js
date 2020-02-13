import React, { useState, useEffect, createRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import timeToString from "../functions/timeToString";

function Offer(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState({});
  const { pictures, title, description, price, creator, created } = offer;

  const fetchData = async URL => {
    try {
      const response = await axios.get(URL);
      console.log(response);
      setOffer(response.data);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred");
    }
  };

  var URL = `https://leboncoin-api.herokuapp.com/api/offer/${id}`;

  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <>
      <div className="bg-grey">
        <div>
          {isLoading ? (
            "Chargement en cours ... "
          ) : (
            <div className="offer-container">
              <div className="offer-container-left">
                <div>
                  {pictures ? (
                    <img
                      className="offer-img"
                      alt={title}
                      src={pictures[0]}
                    ></img>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="offer-information">
                    <div>
                      <p className="offer-title">{title}</p>
                      <p className="offer-price">{price} € </p>
                    </div>
                    <p className="offer-created">{timeToString(created)}</p>
                  </div>
                  <div className="offer-description">
                    <p className="offer-description-title">Description</p>
                    <p className="offer-description-text">{description}</p>
                  </div>
                </div>
              </div>
              <div className="offer-container-right">
                <p className="offer-creator-username">
                  {creator.account.username}
                </p>
                <hr className="hr"></hr>
                <div className="offer-creator-buy-container">
                  <button className="offer-creator-buy">
                    <i className="fas fa-shopping-cart"> Acheter</i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Offer;
