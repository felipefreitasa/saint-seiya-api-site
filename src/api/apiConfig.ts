import axios from "axios";

export const BASE_URL = "https://www.saintseiyaapi.com/api/";

export const api = axios.create({
  baseURL: BASE_URL,
});
