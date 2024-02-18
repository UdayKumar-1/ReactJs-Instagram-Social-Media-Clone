import { createSlice } from "@reduxjs/toolkit";
import { MediaState } from "./Story";

const MessagesSlice = createSlice({
  name: "MediaState",
  initialState: MediaState,
  reducers: {
    MessagesAdd: (state, action) => {
      console.log("action",action.payload)
      return [...state, { message: action.payload }];
    },
    VideoImageAdd: (state, action) => {
      console.log("Dispatched Successfully");
      return[...state,{image:action.payload[0].image}]
    },
  },
});
export const MessagesSliceAction = MessagesSlice.actions;
export default MessagesSlice;
