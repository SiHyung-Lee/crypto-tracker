import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <h1>CoinList</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                {coin.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CoinList;
