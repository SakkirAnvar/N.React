import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ItemMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCard;

  return (
    <div className="itemMenu-container">
      <div className="res-name">
        <h1>{name}</h1>
      </div>
      <div className="res-info">
        <h3>{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name}- Rs. {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemMenu;
