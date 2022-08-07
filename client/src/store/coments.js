import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../services/coments.service";

const initialState = {
  entities: null,
  error: null,
  isLoading: true,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsRecived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    commentsAddcomment: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }

      state.entities.push(action.payload);
    },
    commentsRemove: (state, action) => {
      state.entities = state.entities.filter((c) => c._id !== action.payload);
    },
    commentsRequestedFiled: (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    },
  },
});

const { reducer: commentsReducer, actions } = commentsSlice;

const {
  commentsAddcomment,
  commentsRemove,
  commentsRecived,
  commentsRequestedFiled,
} = actions;

export const loadComentsList = () => async (dispatch) => {
  try {
    const data = await commentsService.loadComment();
    dispatch(commentsRecived(data));
  } catch (error) {
    dispatch(commentsRequestedFiled(error.error));
  }
};

export const addComment = (payload) => async (dispatch) => {
  try {
    const data = await commentsService.addComments(payload);
    dispatch(commentsAddcomment(data));
  } catch (error) {
    const { message } = error.response.data.error;
    return message;
  }
};

export const removeComment = (id) => async (dispath) => {
  try {
    await commentsService.removeComment(id);
    dispath(commentsRemove(id));
  } catch (error) {
    const { message } = error.response.data.error;
    return message;
  }
};

export const getCommentsById = (id) => (state) =>
  state.comments.entities && state.comments.entities !== "Unauthorized"
    ? state.comments.entities.filter((c) => c.pageId === id)
    : [];

export default commentsReducer;
