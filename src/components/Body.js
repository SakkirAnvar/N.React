import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const { setUserName, loggedUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  console.log(restaurantList);

  const PromotedRestaurant = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please Check your internet connection!
      </h1>
    );

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container px-3 mx-3 flex content-between items-center">
        <div className="search">
          <input
            type="text"
            className="search-input p-3 m-3 border border-gray-500 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          ></input>
          <button
            className="search-btn p-3 m-3 bg-green-400 hover:bg-green-600 rounded-lg cursor-pointer text-white"
            onClick={() => {
              const filteredRes = restaurantList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setFilteredList(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="buttonn ">
          <button
            className="filter_btn p-3 m-3 bg-green-400 hover:bg-green-600 rounded-lg cursor-pointer text-white"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setRestaurantList(filteredList);
            }}
          >
            Top Rating restaurant
          </button>
        </div>

        <div className="search">
          <label>User Name : </label>
          <input
            type="text"
            className="search-input p-3 m-3 border border-gray-500 rounded-lg"
            value={loggedUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="restaurant-list flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <PromotedRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
