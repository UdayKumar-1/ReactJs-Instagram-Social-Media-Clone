import React from "react";
import PostItemHeading from "../middlePages/PostItemHeading";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SavedItemsActions } from "../../store/SavedItemSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PostItemSub({ item }) {
  const dispatch = useDispatch();
  const handleSave = (item) => {
    dispatch(SavedItemsActions.addSavedItems(item));
  };
  const HandleToast = () => {
    toast.success("Story Saved Successfully!", {
      position: "top-right",
    });
  };
  // console.log(savedItems);
  return (
    <div className="firstPostItem">
      <ToastContainer />
      <PostItemHeading item={item} />
      <div className="bodyItems">
        <div className="PostItemMain">
          <img src={item.image} className="PostItemPost" />
        </div>
      </div>
      <hr />
      <div className="LikeCommentSection">
        <div className="LikeSection">
          <FaRegHeart />
        </div>
        <div className="CommentSection">
          <FaRegComment />
        </div>
        <div className="shareSection">
          <IoIosShareAlt />
        </div>
        <div className="saveSection" onClick={() => handleSave(item)}>
          <BsBookmark onClick={HandleToast} />
        </div>
      </div>
      <div className="LikeDescriptionSec">
        <div className="likeCount">
          <img src={item.image} className="likesecPic" />
          <span className="Likevalues">
            Liked by <b>{item.heading}</b> and <b>{item.likeCount}</b> Others
          </span>
        </div>
      </div>
      <div className="descriptionSection">
        <div className="DescriptionIntro">
          <p className="hashtags">
            <b>{item.heading}</b> {item.hashtags}
          </p>
        </div>
        <p className="Comments">View All Comments</p>
      </div>
    </div>
  );
}

export default PostItemSub;
