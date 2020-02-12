import React from "react";
import timeToString from "../functions/timeToString";
import { Link } from "react-router-dom";

function OfferItem({ _id, pictures, title, price, created }) {
  // console.log("pictures", pictures);
  // console.log("title", title);
  // console.log("price", price);
  console.log(_id);

  return (
    <>
      <Link className="offer-item-link" to={`/offer/${_id}`}>
        <div className="offer-item-container">
          <div className="offer-item-img-container">
            {pictures.length > 0 ? (
              <img
                alt={title}
                src={pictures[0]}
                className="offer-item-img"
              ></img>
            ) : (
              <i className="fas fa-cloud-download-alt offer-item-alt-img"></i>
            )}
          </div>

          <div className="offer-item-information">
            <div>
              <p className="offer-item-title">{title ? title : ""}</p>
              <p className="offer-item-price">{price ? price + " € " : ""}</p>
            </div>
            <p className="offer-item-created">
              {created ? timeToString(created) : ""}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default OfferItem;
