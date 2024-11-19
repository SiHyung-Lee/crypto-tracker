import { useLocation, useParams } from "react-router-dom";

const CoinDetail = () => {
  const { coinId } = useParams();
  const location = useLocation();
  console.log(location);

  return <h1>{coinId}</h1>;
};

export default CoinDetail;
