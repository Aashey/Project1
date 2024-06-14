import { useState } from "react";
import loginService from "../services/loginServices";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const login = async (url, credentials) => {
    try {
      setLoading(true);
      const response = await loginService.login(url, credentials);
      setLoading(false);
      console.log(response);
      setSuccess(response);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  };
  return { loading, error, success, login };
};

export default useLogin;
