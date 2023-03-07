import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    content: "application/json",
  },


})

export default http; 