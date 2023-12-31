import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_RES } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
    let data = await fetch(API_RES);
    let json = await data.json();
    console.log(json);
    // setting restaurant
    setRestaurants(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
      // json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
      //json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // empty dependency array ==> call once after initial render
  // dependency array [searchText] ==> once after initial render + everytime after reder( searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!! Pleae check your Internet connection</h1>
    );

  // Conditional Rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  // not render component (early return)
  if (!restaurants) return null;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* <div className="features">
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
        {/* if filteredrestaurant is not found 
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
      </div> */}

      <div className="flex px-4 justify-between">
        <div className="search-container">
          <input
            type="text"
            className="border-solid border-2 border-gray-200 rounded-sm"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="border bg-gray-200 px-2 py-1 rounded-md m-4 hover:scale-95"
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
        <div className="filter">
          <button
            className="border bg-gray-200 px-2 py-1 rounded-md m-4 hover:scale-95"
            onClick={() => {
              const data = filterData1(restaurants);
              setFilteredRestaurants(data);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-start px-9">
        {/* if filteredrestaurant is not found */}
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurnat match your Filter!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurants/${restaurant?.info?.id}`}
                key={restaurant?.info?.id}
              >
                <RestaurantCard
                  {...restaurant?.info}
                  deliveryTime={restaurant?.info?.sla.deliveryTime}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
