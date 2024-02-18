import React from "react";
import { BsBookmarkX } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { SavedItemsActions } from "../../store/SavedItemSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProfileFormMain({ setBlurForm, item }) {
  const dispatch = useDispatch();
  const handleToggle = () => {
    setBlurForm(false);
  };
  const handleRemoveImage = (item) => {
    console.log("Clicked remove Btn");
    dispatch(SavedItemsActions.removeSavedItems(item.hashtags));
    toast.success("Story Uploaded Successfully!", {
      position: "top-right",
    });
  };
  return (
    <>
      <form className="FormTag savedPostWidth">
        <ToastContainer />
        <div className="ProfilleFormMain">
          <span className="CrossSymbol">
            <RxCross1 onClick={handleToggle} />
          </span>
          <div className="BlurImageMain">
            <img src={item.image} className="ImageBlur" />
            <br />
            <BsBookmarkX
              className="SaveIcon"
              onClick={() => handleRemoveImage(item)}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfileFormMain;
