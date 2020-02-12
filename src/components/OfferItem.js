import React from "react";

function OfferItem({ pictures, title, price, created }) {
  console.log("pictures", pictures);
  console.log("title", title);
  console.log("price", price);
  return (
    <>
      <div className="offer-item-container">
        <div className="offer-item-img-container">
          {pictures ? (
            <img alt={title} src={pictures[0]} className="offer-item-img"></img>
          ) : (
            <i className="fas fa-cloud-download-alt"></i>
          )}
        </div>

        <div>
          <div>
            <p>{title ? title : ""}</p>
            <p>{price ? price : ""}</p>
          </div>
          <p>{created ? created : ""}</p>
        </div>
      </div>
    </>
  );
}

export default OfferItem;
