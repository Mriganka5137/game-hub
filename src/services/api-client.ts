import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "08faf244b042471cbcf6bc6dcbb907af",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };
}

export default APIClient;
