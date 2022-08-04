import axios from "axios";
import configFile from "../configFile.json";

const http = axios.create({
  baseURL: configFile.apiEndPoind + "users",
});

const userService = {
  getUserById: async (id) => {
    try {
      const data = await http.get(`/${id}`);
      return data;
    } catch (error) {
      const { message } = error.response.data.error;
      return message;
    }
  },
};

export default userService;
