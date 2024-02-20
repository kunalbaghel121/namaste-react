import { CDN_LINKS } from "./utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
      <div className="res-card" style={{
        backgroundColor: "#f0f0f0",
      }}>
        <img
          className="res-logo"
          src={ CDN_LINKS +resData.info.cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4 className="cuisine-container">{cuisines.join(",")}</h4>
        <h4>Star {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;