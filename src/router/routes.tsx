import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";
import Wallet from "../pages/Wallet/Wallet";
import Tickets from "../pages/Tickets/Tickets";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import Notifications from "../pages/Notifications/Notifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "orders", element: <Orders /> },
      { path: "wallet", element: <Wallet /> },
      { path: "tickets", element: <Tickets /> },
      { path: "profile", element: <Profile /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
