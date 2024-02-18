import { createSlice } from "@reduxjs/toolkit";
import { switchAc } from "./Story";

const switchAccSlice=createSlice({
  name:"switchItems",
  initialState:switchAc,

})
export default switchAccSlice;