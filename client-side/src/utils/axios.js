import axios from "axios";

const instance = axios.create({
  baseURL: "https://full-stack-tik-tok.herokuapp.com",
});

export default instance;
