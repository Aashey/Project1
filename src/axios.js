import axios from "axios";

const baseAPIUrl = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL: baseAPIUrl,
});

export default API;
