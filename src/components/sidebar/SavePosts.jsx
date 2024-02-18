import React from "react";
import MiddlePageWrap from "../middlePages/MiddlePageWrap";
import ProfilePosts from "./ProfilePosts";
import { useSelector } from "react-redux";

function SavePosts() {
  const item = useSelector((store) => store.SavedItems);
  return (
    <MiddlePageWrap>
      <div className="savedPostsWrap">
        <ProfilePosts Profileitems={item} />
      </div>
    </MiddlePageWrap>
  );
}

export default SavePosts;
