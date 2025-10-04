import React from "react";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <h1>SearchPage</h1>
      <div className="searchPage_info">
        <p>62 stays · 26 august to 30 august · 2 guests</p>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-1462214851517472743/original/ea5c0df9-6ec1-4947-a9f3-44bcca2db35a.jpeg?im_w=720"
        location="Entire rental unit in Cape Town, South Africa"
        description="2 guests ·1 bedroom ·1 bed ·1 bath"
        star={5.0}
        price="R1,255 / night"
        total="R2,510 for 2 nights"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-1204479187239009934/original/38056366-9fce-45e1-a3cb-60e375f88936.jpeg?im_w=960"
        location="Brooklyn Modern Apartment"
        description="4 guests · 2 bedrooms · 2 beds · 1 bath"
        star={4.83}
        price="R1025 / night"
        total="R2,050 for 2 nights"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-1382723788776276980/original/f13a991e-513f-411f-9996-58a523eef614.jpeg?im_w=960"
        location="Entire condo in Pretoria, South Africa"
        description="4 guests · 2 bedrooms · 2 beds · 1 bath"
        star={5.0}
        price="R837 / night"
        total="R R1,674  for 2 nights"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-1248342212855268211/original/fe9456ca-ea6f-47c4-af6f-cdfd9c6f1dfd.jpeg?im_w=960"
        location="Entire rental unit in Ballito, South Africa"
        description="6 guests · 3 bedrooms · 7 beds · 2 baths"
        star={5.0}
        price="R2,499.5 / night"
        total="R4,999 for 2 nights"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-53978920/original/63ecea85-9652-459a-82a1-72f1e8194282.jpeg?im_w=960"
        location="Unique Dome East in Hartbeespoortdam"
        description="2 guests · 1 bedroom · 1 bed · 1 bath"
        star={4.91}
        price="R893 / night"
        total="R1,786 for 2 nights"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/airflow/Hosting-48821382/original/72c58d40-1749-4d5c-9586-cae00e02192f.jpg?im_w=720"
        location="Apartment on Windon vineyard,Stellenbosch"
        description="2 guests · 1 bedroom · 1 bed · 1 bath"
        star={4.99}
        price="R1,976 / night"
        total="R3,952 for 2 nights"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-1140416907805332229/original/a6f6121c-ec0c-48b7-89ab-559df4383b75.jpeg?im_w=960"
        location="Entire cottage in Cape Winelands District Municipality, South Africa"
        description="4 guests ·2 bedrooms · 5 beds · 2.5 baths"
        star={4.99}
        price="R2,906 / night"
        total="R5,812  for 2 nights"
      />
    </div>
  );
};

export default SearchPage;
