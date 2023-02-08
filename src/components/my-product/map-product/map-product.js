import React from "react";
import map from "./map.png";

import "./map-product.css";

const MapProd = () => {
  return (
    <div className="map-prod">
      <a href="https://www.google.com.ua/maps/search/%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B8">
        <img src={map} alt="map"></img>
      </a>
    </div>
  );
};

export default MapProd;
