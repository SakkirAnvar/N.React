import { useEffect, useState } from "react";
import { RESLIT_URL } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIT_URL);
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

  return [restaurantList, filteredList];
};
export default useRestaurantList;
