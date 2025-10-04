import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="search">
      <h1>SearchPage</h1>
      <div className="searchPage_info">
        <p>62 stays · 26 august to 30 august · 2 guests</p>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
    </div>
  );
};

export default SearchPage;
