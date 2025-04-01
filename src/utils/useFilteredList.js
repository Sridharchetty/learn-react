import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "./constants";

const useFilteredList = () => {
  let [restList, setRestList] = useState([]);
  const [fitlerRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    const finalJson = json?.data?.cards?.slice(3);
    setRestList(finalJson);
    setFilterRes(finalJson);
  };
  return [restList, setRestList, fitlerRes, setFilterRes];
};

export default useFilteredList;
