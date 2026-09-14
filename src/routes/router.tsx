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
import type { RouteHandle } from "./router.types";

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
            handle: { title: "داشبورد کاربری" } satisfies RouteHandle,
          },
          {
            path: "orders",
            element: <Orders />,
            handle: { title: "سفارشات من" } satisfies RouteHandle,
          },
          {
            path: "orders/:id",
            element: <OrderDetails />,
            handle: { title: "جزئیات سفارش" } satisfies RouteHandle,
          },
          {
            path: "wallet",
            element: <Wallet />,
            handle: { title: "کیف پول من" } satisfies RouteHandle,
          },
          {
            path: "tickets",
            element: <Tickets />,
            handle: { title: "تیکت ها" } satisfies RouteHandle,
          },
          {
            path: "tickets/addTicket",
            element: <AddTicket />,
            handle: { title: "افزودن تیکت جدید" } satisfies RouteHandle,
          },
          {
            path: "profile",
            element: <Profile />,
            handle: { title: "اطلاعات حساب کاربری" } satisfies RouteHandle,
          },
          {
            path: "notifications",
            element: <Notifications />,
            handle: { title: "اعلانات" } satisfies RouteHandle,
          },
          {
            path: "notifications/:id",
            element: <NotificationDetails />,
            handle: { title: "جزئیات اعلان" } satisfies RouteHandle,
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
