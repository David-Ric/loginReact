import axios from "axios";

const api= axios.create({
  baseURL: "http://10.0.0.254:8280/mge/service.sbr",
  headers: {
    "Content-type": "application/json",
  }
});

export default api;