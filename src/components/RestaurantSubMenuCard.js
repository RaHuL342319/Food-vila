
const RestaurantSubMenuCard = ({ itemCards }) => {
  return (
    <>
      {itemCards.map((item) => {
        return (
          <li key={item.card.info.id}>
            {item?.card?.info?.name.replace('?',"'")} - {" Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        );
      })}
    </>
  );
};

export default RestaurantSubMenuCard;
