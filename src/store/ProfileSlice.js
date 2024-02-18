import { createSlice } from "@reduxjs/toolkit";
import { ProfileItems } from "./Story";
const ProfileSlice = createSlice({
  name: "ProfileItems",
  initialState: ProfileItems,
  reducers: {
    updateName: (state, action) => {
      const updateProfileName = [...state];
      updateProfileName[0].profileName = action.payload;
      // console.log("UpdatedBio", action.payload);
      return state;
    },
    updateBio: (state, action) => {
      const updateprofileBio = [...state];
      updateprofileBio[0].Bio = action.payload;
      // console.log("UpdatedBio", action.payload);
      return state;
    },
    updatePostCount: (state, action) => {
      const updateCount = [...state];
      updateCount[0].noOfPosts = action.payload;
      return state;
    },
    updatingFollowBtn: (state, action) => {
      const updatedFollowToggle = [...state];
      // console.log("UpdatedFollowToggle", updatedFollowToggle);
      updatedFollowToggle[0] = {
        ...updatedFollowToggle,
        toggleFollow: [
          (updatedFollowToggle[0].toggleFollow[action.payload] =
            !updatedFollowToggle[0].toggleFollow[action.payload]), //We have to access like this because the toggleFollow is not defined in store reducers
        ],
      };
      // console.log("After Update", updatedFollowToggle);

      return state;
    },
    updateFollowers: (state, action) => {
      const updatedState = [...state];
      updatedState[0].noOfFollowers = action.payload;
      return state;
    },
  },
});
export const ProfileSliceActions = ProfileSlice.actions;
export default ProfileSlice;
