import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import CoinList from "./pages/CoinList";
import CoinDetail from "./pages/CoinDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "list",
        element: <CoinList />,
      },
      {
        path: "detail",
        element: <CoinDetail />,
      },
    ],
  },
]);

export default router;
