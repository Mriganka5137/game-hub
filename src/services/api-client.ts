import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "08faf244b042471cbcf6bc6dcbb907af",
  },
});
