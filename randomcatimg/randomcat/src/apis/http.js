import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_cUagqAu12DA6cbWDv1X94YKCG2P2sN8qEXTECBoLoL3IrkjTrEMhUQ3OUKlOSLxY",
  },
});

export default AxiosInstance;
