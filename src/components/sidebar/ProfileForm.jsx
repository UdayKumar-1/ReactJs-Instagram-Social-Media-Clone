import React, { useRef, useState } from "react";
import { PostAddTooltipActions } from "../../store/PostAddTooltipSlice";
import { ProfileSliceActions } from "../../store/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileForm({ setBlurForm }) {
  const postAdd = useSelector((store) => store.PostAdd);
  const setUsername = useRef("");
  let useNav = useNavigate();
  const dispatch = useDispatch();
  const setBio = useRef("");
  const handlePost = () => {
    console.log("setUsername value ", setUsername.current.value);
    console.log("SetBio value ", setBio.current.value);
    dispatch(ProfileSliceActions.updateName(setUsername.current.value));
    dispatch(ProfileSliceActions.updateBio(setBio.current.value));
    dispatch(PostAddTooltipActions.PostAddMethod(!postAdd));
    // Hide the tooltip after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      dispatch(PostAddTooltipActions.PostAddMethod(!postAdd));
    }, 3000);
    setBlurForm(false);
  };

  return (
    <form className="FormTag">
      <div className="ProfilleFormMain">
        <input
          type="text"
          className="profileInputTag"
          placeholder="Update your UserName Here"
          required
          ref={setUsername}
        />
        <br />
        <input
          type="text"
          className="profileInputTag"
          placeholder="Update your Bio Here"
          ref={setBio}
        />
        <br />
        <button
          type="button"
          className="btn btn-primary UpdateProfile"
          onClick={handlePost}
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
