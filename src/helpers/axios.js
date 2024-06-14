import axios from "axios";

const baseAPIUrl = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL: baseAPIUrl,
});

// API.interceptors.request.use(
//   (config) => {
//     console.log("Request Sent: ", config);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// API.interceptors.response.use(
//   (response) => {
//     console.log("Response received: ", response);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default API;
