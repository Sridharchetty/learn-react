import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { Accordion } from "@radix-ui/react-accordion";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const { loggedInUser } = useContext(UserContext);

  // return false;
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, city, locality } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemsInfo =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold text-center mb-2">{name}</h1>
      <hr className="w-2/3 mx-auto border-b-2" />
      <p className="mb-2">{locality + ", " + city}</p>
      <p className="mb-2 font-medium">{cuisines.join(" | ")}</p>
      <p className="font-bold mb-2">{costForTwoMessage}</p>
      <h2 className="underline underline-offset-2 text-lg mb-2">Menu</h2>
      <p>User: {loggedInUser}</p>
      <Accordion type="single" collapsible className="max-w-4xl mx-auto">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default RestaurantMenu;
