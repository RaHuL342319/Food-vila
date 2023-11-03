import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState("KFC"); // To create state variable

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, restaurants);
            // set the restaurants with this data
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
