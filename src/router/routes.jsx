import {
  RouterProvider,
  Link,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/dashboard";
import Brandprofile from "../components/brandprofile/brandprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/brandprofile",
    element: <Brandprofile />,
  },
]);

export default router;
