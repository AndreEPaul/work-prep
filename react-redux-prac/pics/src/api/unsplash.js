import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HzHfuuu7mIj72Wv_CyNanB5ZaSNtK42miohzab42Yu0",
  },
});
