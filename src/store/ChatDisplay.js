import { createSlice } from "@reduxjs/toolkit";
import { ChatDisplayItems } from "./Story";

const ChatDisplaySlice = createSlice({
  name: "ChatDisplay",
  initialState: ChatDisplayItems,
  reducers: {
    DisplayValues: (state, action) => {
      return [action.payload];
    },
  },
});
export const ChatDisplayActions = ChatDisplaySlice.actions;
export default ChatDisplaySlice;
