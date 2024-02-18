import React, { useState } from "react";
import AddPostMiddle from "./AddPostMiddle";
import SideBar from "../sidebar/SideBar";
import FollowBar from "../rightbar/FollowBar";

function AddPost() {
  return (
    <div className="HomeMain">
      <SideBar />
      <AddPostMiddle />
      <FollowBar />
    </div>
  );
}

export default AddPost;
