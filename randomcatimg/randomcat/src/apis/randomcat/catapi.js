import AxiosInstance from "../http";

const CatApi = {
  async getRandomCatImage({ limit = 1, size = "full" } = {}) {
    const response = await AxiosInstance.get("/images/search", {
      params: {
        limit,
        size,
      },
    });
    return response.data;
  },
};

export default CatApi;
