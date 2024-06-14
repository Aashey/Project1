import React, { useEffect } from "react";
import Header from "../global/header";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInStatus = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    !loggedInStatus && navigate("/login");
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Dashboard;
