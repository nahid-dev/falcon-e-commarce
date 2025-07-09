const { default: axios } = require("axios");
export let client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:9999/api/v1",
    headers: {
        "Content-Type": "application/json",
    }
})

const HTTPKit = {
    get: (url, options) => {
    return client.get(url, options);
  },
}

export default HTTPKit;