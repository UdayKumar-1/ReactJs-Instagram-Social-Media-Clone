import React from "react";
import MiddlePageWrap from "../middlePages/MiddlePageWrap";
import ProfilePosts from "./ProfilePosts";
import SideBar from "./SideBar";
import FollowBar from "../rightbar/FollowBar";
import SavePosts from "./SavePosts";
function SavedPostsMain() {
  return (
    <div className="HomeMain">
      <SideBar />
      <SavePosts />
      <FollowBar />
    </div>
  );
}

export default SavedPostsMain;
