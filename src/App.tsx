import { RouterProvider } from "react-router/dom";
import { Toaster } from "react-hot-toast";
import router from "./routes/router";
import ConfirmProvider from "./context/ConfirmProvider";

export default function App() {
  return (
    <ConfirmProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </ConfirmProvider>
  );
}
