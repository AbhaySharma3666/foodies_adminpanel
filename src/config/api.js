import axios from "axios";

/**
 * Centralized Axios instance with base URL configuration.
 * The base URL is read from the VITE_API_BASE_URL environment variable.
 *
 * Usage:
 *   import api from "../config/api";
 *   const response = await api.get("/foods");
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export default api;
