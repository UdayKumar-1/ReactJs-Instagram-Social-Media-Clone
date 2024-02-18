import { createSlice } from "@reduxjs/toolkit";
import { storyItems } from "./Story";

const StoryItemsSlice = createSlice({
  name: "StoryItems",
  initialState: storyItems,
  reducers: {
    addStory: (state, action) => {
      return [...action.payload, ...state];
    },
    removeStory: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});
export const StoryItemsActions = StoryItemsSlice.actions;
export default StoryItemsSlice;
