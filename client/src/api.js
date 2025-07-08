import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // this hits your Express server
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
