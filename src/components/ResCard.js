import { CDN_URL } from "../utils/constants";

// Restaurant Card
const ResCard = (props) => {
  const { resData } = props;
  const { id, cloudinaryImageId, name, cuisines, avgRatingString, locality } =
    resData?.card?.card?.info;
  return (
    <div
      className="res-card p-2.5 rounded border border-gray-400 shadow h-full"
      id={id}
    >
      <div className="res-img-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          width={298}
          height={298}
          alt=""
          className="res-img object-contain h-[298px] w-auto mx-auto mb-4"
        />
      </div>
      <h3 className="res-title text-xl font-semibold mb-3">{name}</h3>
      <p className="res-cuisine font-medium mb-3" style={{ color: "#404040" }}>
        {cuisines.join(" | ")}
      </p>
      <div className="font-bold mb-2">{avgRatingString}</div>
      <p className="res-location">{locality}</p>
    </div>
  );
};

// Higher Order Component

export const withPrmotedResCard = (ResCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white text-xs font-bold p-3 rounded-lg -left-2 -top-2 uppercase">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
