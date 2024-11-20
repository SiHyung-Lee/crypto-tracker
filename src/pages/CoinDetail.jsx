import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CoinDetail = () => {
  const params = useParams();
  const location = useLocation();
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(params);
  console.log(location);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://ohlcv-api.nomadcoders.workers.dev?coinId=${params.coinId}`,
      );
      const json = await response.json();
      console.log(json);
      setInfo(json);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <h1>{location.state.name}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {info.map((coin) => (
            <li>{coin.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CoinDetail;
