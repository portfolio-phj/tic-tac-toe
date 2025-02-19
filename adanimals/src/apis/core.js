import axios from "axios";

const Core = axios.create({
  baseURL: "https://openapi.gg.go.kr/AbdmAnimalProtect",
  params: {
    KEY: "b21f36dc53f044da9b5ef6e4fbcbb50d",
    Type: "json",
    pIndex: 1,
    pSize: 10,
  },
});

export default Core;
