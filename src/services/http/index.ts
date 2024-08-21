import axios, { isAxiosError } from "axios";
import { toast } from "sonner";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      toast.error(error.response?.data);
    }
    return Promise.reject(error.response?.data);
  }
);
