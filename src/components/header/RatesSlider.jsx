// import React from 'react'
import Data from "./Rates";
import './Header.css'

const RatesSlider = () => {
  return (
    <div className="slider_banner_for_rates_mobile_view">
      <div className="coin_rates">
        {Data.map((item, index) => {
          const isPositive = parseFloat(item.hike) > 0;
          return (
            <div key={index} className="coin-item">
              <p className="" style={{ color: "#fabc2c" }}>
                {item.name}
              </p>
              <p className="text-white">{item.price}</p>
              <p style={{ color: isPositive ? "green" : "red" }}>{item.hike}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatesSlider;
