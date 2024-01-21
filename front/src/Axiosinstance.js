import axios from "axios";

let AxiosInstance = axios.create({
  baseURL: "http://localhost:2000/polyline",
});

export default AxiosInstance;