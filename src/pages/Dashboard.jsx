import React, { useEffect, useState } from "react";
import { fetching } from "../API/fetching";
import CurrencyBlock from '../components/CurrencyBlock';
import MyButton from '../UI/button/MyButton';

const Dashboard = () => {
    const [cryptos, setCrypto] = useState([]);
    // const [updater, setUpdate] = useState(0);
    // let updater = 0

    const getAllCrypto = () => {
        fetching()
        .then((data) => setCrypto(data))
        .catch((e) => console.log("Error text: " + e))
    }

    useEffect(() => {
      getAllCrypto();
      const inteval = setInterval(() => {
          getAllCrypto();
      }, 1000000);
       return () => clearInterval(inteval);
    }, []);

  return (
    <div className="dashboard_wrapper">
      {/* <MyButton onClick={() => clearInterval(inteval)}>
        STOP UPDATE
      </MyButton> */}
      <div className="crypto_container">
      {cryptos.length !== 0 ? (
        cryptos.map((coin) => (
          <CurrencyBlock key={coin.symbol} coin={coin}/>
        ))
      ) : (
        <p>No Data</p>
      )}
      </div>
    </div>
  );
};

export default Dashboard;
