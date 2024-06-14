import API from "../helpers/axios";

const loginService = {
  login: async (url, credentials) => {
    try {
      const response = await API.post(url, credentials);
      const access_token = response;
      return access_token;
    } catch (error) {
      throw new Error("Login Failed!");
    }
  },
};
export default loginService;
