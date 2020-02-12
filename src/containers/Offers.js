import React, { useState, useEffect } from "react";
import axios from "axios";

import OfferItem from "../components/OfferItem";

function Offers(props) {
  //   const {} = props;
  //   const URL = "https://leboncoin-api.herokuapp.com/api/offer/with-count";

  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );
      setCount(response.data.count);
      setOffers(response.data.offers);
      setIsLoading(false);
      //   console.log(response);
      //   console.log(response.data.offers);
    } catch (err) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log("offers", offers[0]);

  return (
    <>
      <div>
        {isLoading ? (
          "Chargement en cours ... "
        ) : (
          <div className="offers-container">
            {offers.map(offer => {
              return <OfferItem {...offer}></OfferItem>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Offers;
