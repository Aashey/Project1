import React, { useEffect, useState } from "react";
import { Card, Table, Input, Button, Typography } from "antd";
import BASEURL from "../../axios";
import { useNavigate } from "react-router";

const Brandprofile = () => {
  const { Title, Link, Text } = Typography;
  const [brandprofile, setBrandProfile] = useState({});
  const navigate = useNavigate();
  const loggedInStatus = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    !loggedInStatus && navigate("/login");
  }, []);

  const brandProfileColumn = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
  ];

  const getBrandProfile = async () => {
    try {
      const url = "pharmacy/setup/brandprofiles";
      const brandProfileResponse = BASEURL.get(url);
      const brandProfileData = await brandProfileResponse;
      console.log(brandProfileData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrandProfile();
  });
  return (
    <div>
      <Table dataSource={brandprofile} columns={brandProfileColumn} />
    </div>
  );
};

export default Brandprofile;
