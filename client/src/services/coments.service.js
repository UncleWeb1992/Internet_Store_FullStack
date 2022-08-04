import { httpService } from "./http.service";

const commentEndPoind = "/comments";

const commentsService = {
  loadComment: async () => {
    try {
      const { data } = await httpService.get(commentEndPoind);
      return data;
    } catch (error) {
      const { message } = error.response.data;
      return message;
    }
  },

  addComments: async (payload) => {
    try {
      const { data } = await httpService.post(commentEndPoind, payload);
      return data;
    } catch (error) {
      const { message } = error.response.data;
      return message;
    }
  },

  removeComment: async (id) => {
    try {
      await httpService.delete(commentEndPoind + `/${id}`);
    } catch (error) {
      const { message } = error.response.data;
      return message;
    }
  },
};

export default commentsService;
