import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-manager-4-juln.onrender.com", // Backend base URL
});

export default instance;
