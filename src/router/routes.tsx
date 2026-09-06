import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Users from "../pages/Users/Users";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
