import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("codeburguer:userData");
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default api;
