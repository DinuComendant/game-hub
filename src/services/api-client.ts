import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e0aa72aebcfd4d489eeaa0b4d1705a80",
  },
});
