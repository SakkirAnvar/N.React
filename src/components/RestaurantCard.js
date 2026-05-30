import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // const resData = props

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card w-48 h-96 p-4 m-4 border-b-gray-50 rounded-lg bg-gray-50">
      <img
        className="res-logo w-44 h-44 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime}Min</h4>
    </div>
  );
};

export default RestaurantCard;
