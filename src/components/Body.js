import { use, useContext, useEffect, useState } from "react";
// import restaurantList from "../utils/mockData";
import ResCard, { withPrmotedResCard } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFilteredList from "../utils/useFilteredList";
import UserContext from "../utils/UserContext";

// Body Component
const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState();
  let [restList, setRestList] = useFilteredList();
  const [fitlerRes, setFilterRes] = useFilteredList();
  const ResCardPromoted = withPrmotedResCard(ResCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return <h1>Looks like your internet is down!! Please check you network</h1>;
  }

  return fitlerRes.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-5">
      <div className="search flex items-center mb-5 justify-between">
        <div className="flex items-center">
          <div className="searchBox">
            <input
              className="h-10 border border-stone-500 rounded min-w-96 mr-5 px-3.5"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="ex. cake, kfc,.."
            />
            <button
              className="btn bg-blue-700 text-white p-3 min-w-36 rounded mr-4"
              onClick={() => {
                const filteredRes = restList.filter((res) =>
                  res.card.card.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilterRes(filteredRes);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="bg-green-700 text-white p-3 min-w-36 rounded mr-4"
            type="button"
            onClick={() => {
              const topRatetList = restList.filter(
                (res) => res.card.card.info.avgRating > 4.5
              );
              setFilterRes(topRatetList);
            }}
          >
            Top Rated
          </button>
          <button
            className="clear-btn bg-orange-700 text-white p-3 min-w-36 rounded "
            type="button"
            onClick={() => {
              setFilterRes(restList);
            }}
          >
            Clear Filter
          </button>
        </div>
        <div>
          <label htmlFor="">User Name: </label>
          <input
            className="p-2 border"
            type="text"
            placeholder="username"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container grid grid-cols-5 gap-4">
        {fitlerRes.map((res, index) => (
          <Link
            key={res.card.card.info.id}
            to={"/restaurants/" + res.card.card.info.id}
          >
            {res.card.card.info.promoted === true ? (
              <ResCardPromoted resData={res} />
            ) : (
              <ResCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
