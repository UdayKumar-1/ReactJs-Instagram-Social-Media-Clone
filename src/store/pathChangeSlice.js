import { createSlice } from "@reduxjs/toolkit";

const pathChangeSlice=createSlice({
  name:"pathChange",
  initialState:{
    home:true,
    search:false,
    messages:false,
    reels:false,
  }
})
export default pathChangeSlice;