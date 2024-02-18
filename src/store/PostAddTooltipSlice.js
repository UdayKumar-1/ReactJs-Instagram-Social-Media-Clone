import { createSlice } from "@reduxjs/toolkit";

const PostAddTooltipSlice = createSlice({
  name: "PostAdd",
  initialState: {
    addPost: false,
    addStoty: false,
    savePost: false,
    removePost: false,
    saveStory: false,
    removeStory: false,
  },
  reducers: {
    PostAddMethod: (state) => {
      return !state;
    },
  },
});
export const PostAddTooltipActions = PostAddTooltipSlice.actions;
export default PostAddTooltipSlice;
