import React, { useState } from "react";
import { BsBookmarkX } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { StoryItemsActions } from "../../store/StoryItemsSlice";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function BlurStoryImageHandle({ setBlurForm, item }) {
  const postAdd = useSelector((store) => store.addPost);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setBlurForm(false);
  };
  const handleRemoveImage = (item) => {
    dispatch(StoryItemsActions.removeStory(item.id));
    toast.success("Story Removed Successfully!", {
      position: "top-right",
    });
  };
  return (
    <>
      <div className="StoryBlurMain">
        <ToastContainer />
        <form className="FormTagStory savedStoryWidth">
          <div className="ProfilleFormMain">
            <span className="CrossSymbolStory">
              <RxCross1 onClick={handleToggle} />
            </span>
            <div className="BlurImageMain">
              <img src={item.image} className="ImageBlurStory" />
              <br />
              <BsBookmarkX
                className="saveIconStory"
                onClick={() => handleRemoveImage(item)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BlurStoryImageHandle;
