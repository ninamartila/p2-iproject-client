import axios from "axios";

const API_URL = "https://tour-schedule.herokuapp.com/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

export default axiosApi;
