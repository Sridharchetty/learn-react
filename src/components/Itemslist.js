import { CDN_URL } from "../utils/constants";

const Itemslist = ({ items }) => {
  return items.map((item, index) => {
    // console.log(item);
    return (
      <div
        key={item?.card?.info?.id}
        className="flex items-center justify-between mb-2 border-b pb-3"
      >
        <div>
          <div>{item?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}</div>
          <div className="font-bold mb-2">{item?.card?.info?.name}</div>
          <div className="font-semibold mb-2">
            &#x20B9;{item?.card?.info?.price / 100}
          </div>
          <div>{item?.card?.info?.description}</div>
        </div>
        <div>
          <img
            className="rounded shadow"
            alt={item?.card?.info?.name}
            height={144}
            width={156}
            src={CDN_URL + item?.card?.info?.imageId}
          />
        </div>
      </div>
    );
  });
};

export default Itemslist;
