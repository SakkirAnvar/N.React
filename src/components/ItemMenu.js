import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ITEM_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const ItemMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ITEM_URL + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.grouoedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
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
