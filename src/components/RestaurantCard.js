import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card w-60 h-96 p-4 m-4 border-b-gray-50 rounded-lg bg-gray-50 hover:bg-gray-100">
      <img
        className="res-logo w-60 h-44 rounded-lg"
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


//higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { header } =
      props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">{header}</label>
        <RestaurantCard {...props} />
        
      </div>
    );
  };
};

export default RestaurantCard;
