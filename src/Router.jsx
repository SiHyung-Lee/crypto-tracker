import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CoinList from "./pages/CoinList";
import CoinDetail from "./pages/CoinDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <CoinList />,
      },
      {
        path: "/:coinId",
        element: <CoinDetail />,
      },
    ],
  },
]);

export default router;
