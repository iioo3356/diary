import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

request.interceptors.response.use((res) => {
  return res.data;
});

export default request;
