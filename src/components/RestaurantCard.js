import React from "react";
import { Link } from "react-router-dom";
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
    // <div className="card">
    //   <img
    //     src={IMG_CDN_URL + `${cloudinaryImageId}`}
    //     alt="img"
    //     className="card-img"
    //   />
    //   <span className="bold">{name}</span>
    //   <br />
    //   <span className="bold">
    //     {avgRating} stars • {deliveryTime} mins
    //   </span>
    //   <br />
    //   <br />
    //   <span className="card-cuisins">{cuisines.join(", ")}</span>
    //   <br />
    //   <span>{locality}</span>
    // </div>

    <div className="p-2 m-2 bg-gray-100 w-[220px] rounded-md hover:scale-95">
      <img
        src={IMG_CDN_URL + `${cloudinaryImageId}`}
        alt="img"
        className="w-[200px] h-[180px] rounded-lg"
      />
      <div className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
        {name}
      </div>
      {/* <span className="bold">{name}</span> */}
      <div className="font-medium">
        {avgRating} stars • {deliveryTime} mins
      </div>
      <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
        {cuisines.join(", ")}
      </div>
      <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[200px]">
        {locality}
      </div>
    </div>
  );
};

export default RestaurantCard;
