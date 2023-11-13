import React from "react";
import RestaurantSubMenuCard from "./RestaurantSubMenuCard";

const RestaurantMenuCard = ({ card }) => {
  return card.hasOwnProperty("itemCards") ? (
    <ul>
      <RestaurantSubMenuCard {...card} />
    </ul>
  ) : (
    <ul>
      {/* {console.log(card?.categories)} */}
      {card?.categories?.map((category) => {
        return (
          <div className="sub-menu">
            <h3>{category.title}</h3>
            <RestaurantSubMenuCard {...category} />
          </div>
        );
      })}
    </ul>
  );
};

export default RestaurantMenuCard;
