import React from "react";
import { index } from "../img/index";

const CurrencyBlock = ({ coin }) => {
  return (
    <div className="dashboard_element_wrapper glass">
      <div className="left_right-elems-media">
        <div className="top-block">
          <p>Coin:</p>
          <p>{coin.symbol}</p>
        </div>
        <div className="bottom-block">
          <p>Price in USD:</p>
          <p>{`${Math.trunc(coin.priceUsd * 100) / 100}$`}</p>
        </div>
      </div>

      <div className="left_right-elems">
        <div className="left-elems">
          <p>Coin:</p>
          <p>Price in USD:</p>
        </div>
        <div className="right-elems">
          <p>{coin.symbol}</p>
          <p>{`${Math.trunc(coin.priceUsd * 100) / 100}$`}</p>
        </div>
      </div>
      <img
        src={index[coin.symbol]}
        alt="Logo"
        className="crypto-logo"
        data-name={`${coin.id}`}
      ></img>
    </div>
  );
};

export default CurrencyBlock;
