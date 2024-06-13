import React, { useEffect, useState } from "react";
import BASEURL from "../../axios";
import { useNavigate } from "react-router";
import { Card, Form, Input, Button, Space, Select, Typography } from "antd";

const Login = () => {
  const { Title, Text, Link } = Typography;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const getLoginToken = async () => {
    try {
      const url = "/login";
      setLoading(true);
      const getToken = await BASEURL.post(url, credentials);
      localStorage.setItem("token", getToken.data.data.access_token);
      setLoading(false);
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  const handleFormSubmit = (values) => {
    setCredentials(values);
  };

  useEffect(() => {
    if (Object.keys(credentials).length > 0) {
      getLoginToken();
    }
  }, [credentials]);

  useEffect(() => {
    loggedIn && navigate("/dashboard");
  }, [token, navigate]);

  return (
    <div>
      {error ? <p>Error Logging In.</p> : ""}
      <Card
        title={
          <Title type="warning" level={2}>
            Login
          </Title>
        }
        style={{ maxWidth: "500px", margin: "10px auto" }}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Username is required!" }]}
          >
            <Input addonBefore="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input.Password addonBefore="Password" />
          </Form.Item>
          <Button type="primary" block htmlType="Submit" value="Submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
