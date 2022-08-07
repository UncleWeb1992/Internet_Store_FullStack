import { httpService } from "./http.service";

const commentEndPoind = "/comments";

const commentsService = {
  loadComment: async () => {
    try {
      const { data } = await httpService.get(commentEndPoind);
      return data;
    } catch (error) {
      const { message } = error.response.data;
      const obgError = { error: message };
      throw obgError;
    }
  },

  addComments: async (payload) => {
    try {
      const { data } = await httpService.post(commentEndPoind, payload);
      return data;
    } catch (error) {
      const { message } = error.response.data;
      const obgError = { error: message };
      throw obgError;
    }
  },

  removeComment: async (id) => {
    try {
      await httpService.delete(commentEndPoind + `/${id}`);
    } catch (error) {
      const { message } = error.response.data;
      const obgError = { error: message };
      throw obgError;
    }
  },
};

export default commentsService;
