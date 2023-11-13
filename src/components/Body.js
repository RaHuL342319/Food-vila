import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_RES } from "../utils/constants";
import {Link} from 'react-router-dom';
import restaurantList from "../utils/mockData";
/**
 * 
 * @param {*} searchText 
 * @param {*} restaurants 
 * @returns It return restaurants data according to seachText
 */
function filterData(searchText, restaurants) {
  const filterRestaurant = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterRestaurant;
}
/**
 * @param  restaurants 
 * @returns restaurants which have rating above 4.
 */
function filterData1(restaurants) {
  const filterRestaurant = restaurants.filter(
    (restaurant) => restaurant.info.avgRating > 4
  );
  return filterRestaurant;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  

  const getRestaurants = async () => {
    let data = await fetch(
      API_RES
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
      <div className="features">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const data = filterData1(restaurants);
              setFilteredRestaurants(data);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
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
              console.log(data);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {/* if filteredrestaurant is not found */}
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurnat match your Filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={`/restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard
              {...restaurant?.info}
              deliveryTime={...restaurant?.info?.sla.deliveryTime}
              /></Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
