import React from "react";
import AddStoryMiddle from "./AddStoryMiddle";
import FollowBar from "../rightbar/FollowBar";
import SideBar from "../sidebar/SideBar";
function AddStory() {
  return (
    <div className="HomeMain">
      <SideBar />
      <AddStoryMiddle />
      <FollowBar />
    </div>
  );
}

export default AddStory;
