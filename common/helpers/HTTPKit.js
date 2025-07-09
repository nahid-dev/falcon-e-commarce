const { default: axios } = require("axios");
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL // HTTP (OK locally)
    : "/api/proxy"; // Proxy for production (secure HTTPS)
export let client = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const HTTPKit = {
  get: (url, options) => {
    return client.get(url, options);
  },
};

export default HTTPKit;
