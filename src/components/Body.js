import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const onlineStatus = useOnlineStatus()

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

  if(onlineStatus === false) return <h1>Looks like you're offline!! Please Check your internet connection!</h1>

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
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
        <div className="button">
          <button
            className="filter_btn"
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
      </div>

      <div className="restaurant-list">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
