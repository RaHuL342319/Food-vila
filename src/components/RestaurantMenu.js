import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };

  // early return
  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo?.data?.cards[0]?.card?.card?.info);
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    city,
    totalRatingsString,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="res-info">
      <h1>{name}</h1>
      <div className="res-details">
        <div>
          <span>{cuisines.join(", ")}</span>
          <br />
          <span>{city}</span>
          <br />
          <span>{costForTwoMessage}</span>
        </div>

        <div>
          <button style={{width:"100px"}}>{avgRatingString}</button>
          <br />
          <button  style={{width:"100px"}}>{totalRatingsString}</button>
          <br />
        </div>
      </div>
      {/* <div className="res-offers">
        <h3>Offers card</h3>
      </div> */}

      <div className="res-menu">
        {resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (itemType) => {
            // console.log(itemType)
            return (
              <div className="item-type" key={itemType?.card.card.id}>
                <h2>{itemType?.card?.card?.title}</h2>
                <RestaurantMenuCard {...itemType?.card} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
