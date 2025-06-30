import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api", // ✅ Corrected from lcoalhost to localhost
  withCredentials: true, // if you are using cookies/session
});
