import axios from "axios";

// const API_URL = "https://tour-schedule.herokuapp.com/";
const API_URL = "http://localhost:3000/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

export default axiosApi;
