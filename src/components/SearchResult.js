import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./SearchResult.css";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult_heart " />
      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>----</p>
          <p>{description}</p>
        </div>
        <div className="searchResult_infoBottom">
          <div className="searchResult_stars">
            <p className="searchResult_stars">
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult_price">
            <h2>
              <strong>{price}</strong>
              <p>{total}</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
