import axios from "axios";

const baseAPIUrl = import.meta.env.VITE_BASE_URL;

const BASEURL = axios.create({
  baseURL: baseAPIUrl,
});

export default BASEURL;
