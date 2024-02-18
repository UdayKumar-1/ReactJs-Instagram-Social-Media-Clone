import { createSlice } from "@reduxjs/toolkit";
import { SavedItems } from "./Story";

const SavedItemSlice = createSlice({
  name: "SavedItems",
  initialState: SavedItems,
  reducers: {
    addSavedItems: (state, action) => {
      return [action.payload, ...state];
    },
    removeSavedItems: (state, action) => {
      // console.log(state.filter((item) => item.hashtags !== action.payload));
      return state.filter((item) => item.hashtags !== action.payload);
    },
  },
});
export const SavedItemsActions = SavedItemSlice.actions;
export default SavedItemSlice;
