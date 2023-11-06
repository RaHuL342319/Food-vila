import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterRestaurant = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase()?.includes(searchText.toLowerCase)
  );
  return filterRestaurant;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getRestaurants = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25998573151481&lng=77.43188939988615"
    );
    let json = await data.json();
    // setting restaurant
    setRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // empty dependency array ==> call once after initial render
  // dependency array [searchText] ==> once after initial render + everytime after reder( searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  // not render component (early return)
  if (!restaurants) return null;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* if filteredrestaurant is not found */}
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurnat match your Filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                {...restaurant?.info}
                key={restaurant?.info?.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
