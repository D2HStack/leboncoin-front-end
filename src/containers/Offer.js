import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <div>
        {isLoading ? (
          "Chargement en cours ... "
        ) : (
          <div>
            <div>
              {pictures ? (
                <img className="offer-img" alt={title} src={pictures[0]}></img>
              ) : (
                ""
              )}
            </div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Offer;
