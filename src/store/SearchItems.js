import { createSlice } from "@reduxjs/toolkit";
import { SearchedItems } from "./Story";

const SearchItemSlice = createSlice({
  name: "SearchedItems",
  initialState: SearchedItems,
  reducers: {
    FilterSearchItems: (state, action) => {
      if (action.payload === "false") {
        return (state = []);
      }
      return state.filter((item) => item.name.includes(action.payload));
      // return state.filter((item) => item.name === action.payload);
    },
    removeItemFilter: (state, action) => {
      return (state = [{}]);
    },
  },
});
export const SearchSliceActions = SearchItemSlice.actions;
export default SearchItemSlice;
