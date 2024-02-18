import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { PostItemActions } from "../../store/PostItemsSlice";
import { PostAddTooltipActions } from "../../store/PostAddTooltipSlice";
import { ProfileSliceActions } from "../../store/ProfileSlice";
function PostItemHeading({ item }) {
  const dispatch = useDispatch();
  const postAdd = useSelector((store) => store.addPost);
  const updateFollowers = useSelector((store) => store.ProfileItems);
  // console.log("UpdatedFollowers", updateFollowers);
  const handleDelete = (DeletedItem) => {
    dispatch(PostItemActions.deletePost(DeletedItem.image));
    dispatch(
      ProfileSliceActions.updatePostCount(updateFollowers[0].noOfPosts - 1)
    );
    dispatch(PostAddTooltipActions.PostAddMethod(!postAdd));
    // Hide the tooltip after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      dispatch(PostAddTooltipActions.PostAddMethod(!postAdd));
    }, 3000);
  };
  return (
    <div className="Postheading">
      <div className="PostProfile">
        <img src={item.image} className="PostProfileImg" />
      </div>
      <div className="PostHeadMain">
        <div className="PostHead">{item.heading}</div>
        <div className="PostDesc">{item.desc}</div>
      </div>
      <div className="PostDate">{`${new Date().getHours()}h`}</div>
      <button className="EditItems" onClick={() => handleDelete(item)}>
        <MdDelete />
      </button>
    </div>
  );
}

export default PostItemHeading;
