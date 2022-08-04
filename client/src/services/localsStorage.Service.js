const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

const localStorageService = {
  addProductsToCart: (payload) => {
    localStorage.setItem("cart", JSON.stringify(payload));
  },

  getLocalStorageCartProducts: () => {
    return JSON.parse(localStorage.getItem("cart"));
  },

  updateLocalStorageCartProducts: (payload) => {
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(payload));
  },

  removeLocalStorageCartProducts: () => {
    localStorage.removeItem("cart");
  },

  setTokens: ({ refreshToken, accessToken, userId, expiresIn }) => {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(USERID_KEY, userId);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
  },

  getAccessToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  getRefreshToken: () => {
    return localStorage.getItem(REFRESH_KEY);
  },

  getTokenExpiresDate: () => {
    return localStorage.getItem(EXPIRES_KEY);
  },

  getUserId: () => {
    return localStorage.getItem(USERID_KEY);
  },

  removeAuthData: () => {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
  },
};

export default localStorageService;
