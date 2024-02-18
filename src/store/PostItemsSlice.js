import { createSlice } from "@reduxjs/toolkit";
import { postItems } from "./Story";

const PostItemsSlice = createSlice({
  name: "Postitems",
  initialState: postItems,
  reducers: {
    addPost: (state, action) => {
      return [...action.payload, ...state];
    },
    deletePost: (state, action) => {
      return state.filter((item) => item.image != action.payload);
    },
  },
});
export const PostItemActions = PostItemsSlice.actions;
export default PostItemsSlice;
