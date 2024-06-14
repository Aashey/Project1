import { useState } from "react";
import {
  RouterProvider,
  Link,
  createBrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import routers from "./routers/routers.jsx";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
