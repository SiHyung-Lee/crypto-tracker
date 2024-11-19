import { useLocation, useParams } from "react-router-dom";

const CoinDetail = () => {
  const { coinId } = useParams();
  const { state } = useLocation();
  console.log(coinId);
  console.log(state);

  return (
    <h1>
      {coinId}
      {state}
    </h1>
  );
};

export default CoinDetail;
