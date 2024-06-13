import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInStatus = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    !loggedInStatus && navigate("/login");
  }, []);

  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
