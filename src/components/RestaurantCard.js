import React from 'react';
import {Link} from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";


const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  locality,
  deliveryTime,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + `${cloudinaryImageId}`} alt="img" className="card-img"/>
      <span className="bold">{name}</span>
      <br />
      <span className="bold">
        {avgRating} stars • {deliveryTime} mins
      </span>
      <br />
      <br />
      <span className="card-cuisins">{cuisines.join(", ")}</span>
      <br />
      <span>{locality}</span>
    </div>
  );
};

export default RestaurantCard;
