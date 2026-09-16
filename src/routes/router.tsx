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
import NotificationDetails from "../pages/Notifications/components/NotificationDetails";
import OrderDetails from "../pages/Orders/OrderDetails/OrderDetails";
import TicketDetails from "../pages/Tickets/TicketDetails/TicketDetails";
import { PAGE_TITLES } from "../constants/pageTitles";
import type { RouteHandle } from "../types/common";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            handle: { title: PAGE_TITLES.DASHBOARD } satisfies RouteHandle,
          },
          {
            path: "orders",
            element: <Orders />,
            handle: { title: PAGE_TITLES.ORDERS } satisfies RouteHandle,
          },
          {
            path: "orders/:id",
            element: <OrderDetails />,
            handle: { title: PAGE_TITLES.ORDER_DETAILS } satisfies RouteHandle,
          },
          {
            path: "wallet",
            element: <Wallet />,
            handle: { title: PAGE_TITLES.WALLET } satisfies RouteHandle,
          },
          {
            path: "tickets",
            element: <Tickets />,
            handle: { title: PAGE_TITLES.TICKETS } satisfies RouteHandle,
          },
          {
            path: "tickets/:id",
            element: <TicketDetails />,
            handle: { title: PAGE_TITLES.TICKET_DETAILS },
          },
          {
            path: "tickets/addTicket",
            element: <AddTicket />,
            handle: { title: PAGE_TITLES.ADD_TICKET } satisfies RouteHandle,
          },
          {
            path: "profile",
            element: <Profile />,
            handle: { title: PAGE_TITLES.PROFILE } satisfies RouteHandle,
          },
          {
            path: "notifications",
            element: <Notifications />,
            handle: { title: PAGE_TITLES.NOTIFICATIONS } satisfies RouteHandle,
          },
          {
            path: "notifications/:id",
            element: <NotificationDetails />,
            handle: {
              title: PAGE_TITLES.NOTIFICATION_DETAILS,
            } satisfies RouteHandle,
          },
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
