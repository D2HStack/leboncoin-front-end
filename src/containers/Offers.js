import React, { useState, useEffect } from "react";
import axios from "axios";

import OfferItem from "../components/OfferItem";
import Search from "../components/Search";

function Offers(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);
  let page = 1;
  const numPerPage = 35;

  const fetchData = async URL => {
    try {
      const response = await axios.get(URL);
      setCount(response.data.count);
      setOffers(response.data.offers);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred");
    }
  };

  var URL = `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${(page -
    1) *
    numPerPage}&limit=${numPerPage}`;

  // console.log(URL);

  useEffect(() => {
    fetchData(URL);
  }, []);

  const numPages = Math.floor(count / numPerPage);

  const createPageTable = num => {
    let tab = [];
    for (let i = 1; i <= num; i++) {
      tab.push(
        <span
          key={i}
          className="offers-page-table-item"
          onClick={() => {
            page = i;
            URL = `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${(page -
              1) *
              numPerPage}&limit=${numPerPage}`;
            fetchData(URL);
          }}
        >
          {i}
        </span>
      );
    }
    return tab;
  };

  return (
    <>
      <div className="App">
        <Search></Search>
        <div>
          {isLoading ? (
            "Chargement en cours ... "
          ) : (
            <div className="offers-container">
              <div>
                {offers.map((offer, index) => {
                  return <OfferItem {...offer} key={offer.id}></OfferItem>;
                })}
              </div>
              <div className="offers-page-table">
                {createPageTable(numPages)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Offers;
