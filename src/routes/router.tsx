import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";
import Wallet from "../pages/Wallet/Wallet";
import Tickets from "../pages/Tickets/Tickets";
import Profile from "../pages/Profile/Profile";
import Notifications from "../pages/Notifications/Notifications";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import AddTicket from "../pages/Tickets/AddTicket/AddTicket";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "orders", element: <Orders /> },
          { path: "wallet", element: <Wallet /> },
          { path: "tickets", element: <Tickets /> },
          { path: "tickets/addTicket", element: <AddTicket /> },
          { path: "profile", element: <Profile /> },
          { path: "notifications", element: <Notifications /> },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
