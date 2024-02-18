import React from "react";
import PostItemSub from "./PostItemSub";
import { useSelector } from "react-redux";
import EmptyPostsMessage from "../addPost/EmptyPostsMessage";
function PostItems() {
  const items = useSelector((store) => store.Postitems);
  return (
    <>
      {items.length === 0 && <EmptyPostsMessage />}
      {items.map((item) => (
        <PostItemSub key={item.image} item={item} />
      ))}
    </>
  );
}

export default PostItems;
