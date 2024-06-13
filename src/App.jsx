import { useState } from "react";
import {
  RouterProvider,
  Link,
  createBrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import router from "./router/routes.jsx";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;