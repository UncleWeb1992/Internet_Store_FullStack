import axios from "axios";
import configFile from "../configFile.json";
import localStorageService from "./localsStorage.Service";

const http = axios.create({
  baseURL: configFile.apiEndPoind,
});

const authEndPoind = "auth/token";

http.interceptors.request.use(
  async function (config) {
    const expiresDate = localStorageService.getTokenExpiresDate();
    const refreshToken = localStorageService.getRefreshToken();
    if (config.method === "get" && config.url !== "/products") {
      if (refreshToken && expiresDate < Date.now()) {
        const { data } = await http.post(authEndPoind, {
          refresh_token: refreshToken,
        });

        localStorageService.setTokens(data);
      }
    }

    const accesToken = localStorageService.getAccessToken();
    if (accesToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accesToken}`,
      };
    }

    return config;
  },
  // eslint-disable-next-line no-dupe-keys
  function (error) {
    return Promise.reject(error);
  }
);

export const httpService = {
  get: http.get,
  post: http.post,
  patch: http.patch,
  delete: http.delete,
};
