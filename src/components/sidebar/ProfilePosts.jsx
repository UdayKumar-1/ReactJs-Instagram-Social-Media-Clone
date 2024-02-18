import React from "react";
import PostsPage from "./PostsPage";
function ProfilePosts({ Profileitems,postState }) {
  const itemsArray = Array.isArray(Profileitems) ? Profileitems : [];
  // console.log("ItemsAarray",itemsArray);
  return (
    <div className="ImagesMainProfile">
      {itemsArray &&
        itemsArray.map((item) => <PostsPage key={item.hashtags} item={item}postState={postState} />)}
    </div>
  );
}

export default ProfilePosts;
