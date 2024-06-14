import { Button, Card, Form, Input, Typography, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useLogin from "../../hooks/useLogin";

const { Title, Text, Link } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const { loading, error, success, login } = useLogin();
  const loggedIn = localStorage.getItem("isLoggedIn");
  const [token, setToken] = useState();

  const handleFormSubmit = (credentials) => {
    const url = "/login";
    login(url, credentials);
  };

  // useEffect(() => {
  //   if (success) {
  //     message.success(success.message);
  //   } else {
  //     message.error(error.message);
  //   }
  // }, [success, error]);

  useEffect(() => {
    loggedIn && navigate("/dashboard");
  }, [token, navigate]);

  return (
    <div>
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
          <Button type="primary" block htmlType="Submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
