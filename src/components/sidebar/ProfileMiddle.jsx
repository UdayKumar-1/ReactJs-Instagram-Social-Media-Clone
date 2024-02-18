import React, { useEffect, useState } from "react";
import SingleStory from "../addStory/SingleStory";
import { useSelector } from "react-redux";
import SinglePlus from "../addStory/SinglePlus";
import { IoMdGrid } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import ProfilePosts from "./ProfilePosts";
import ProfileForm from "./ProfileForm";
function ProfileMiddle() {
  const [blurForm, setBlurForm] = useState(false);
  const items = useSelector((store) => store.StoryItems);
  const ProfileObj = useSelector((store) => store.ProfileItems);
  // console.log(ProfileObj, "ProfileObj");
  const SavedItems = useSelector((store) => store.SavedItems);
  // console.log("savedPosts are", SavedItems);
  const PostItems = useSelector((store) => store.Postitems);
  const [postState, setPostState] = useState(false);
  const [savedPost, setSavedPost] = useState(false);
  const handleSetBlur = () => {
    setBlurForm(!blurForm);
  };
  // console.log(blurForm);
  const HandlePosts = () => {
    // console.log("Entered HandlePost Method");
    setPostState(true);
    setSavedPost(false);
    // console.log(postState, savedPost);
  };
  const HandleSavedPosts = () => {
    // console.log("Entered HandleSavedPost Method");
    setSavedPost(true);
    setPostState(false);
    // console.log(postState, savedPost);
  };
  // console.log(savedPost);
  return (
    <div className="middlePage">
      <div className="postbar ">
        <div className="">
          <div className="addStoryMiddle">
            <div className="px-4 py-5 my-5 text-center">
              <div className="ProfileMain">
                <div className="profileFirstSec">
                  <div className="ProfileImageMain">
                    <img src="post3.jpeg" className="profileImageCircle" />
                  </div>
                  <div className="firstProfileSecMain">
                    <div className="FirstUserName">
                      <span className="firstProfileSpanTag">
                        {ProfileObj[0].profileName}
                      </span>
                      <button
                        className="btn btn-outline-light me-2"
                        onClick={handleSetBlur}
                      >
                        <b>Edit Profile</b>
                      </button>
                    </div>
                    <div className="secondProfilesec">
                      <span className="firstProfilePTag">
                        {ProfileObj[0].noOfPosts} Posts
                      </span>
                      <span className="firstProfilePTag">96 Followers</span>
                      <span className="firstProfilePTag">
                        {ProfileObj[0].noOfFollowers} Following
                      </span>
                    </div>
                    <p className="BioProfile">{ProfileObj[0].Bio}</p>
                  </div>
                  {blurForm && <ProfileForm setBlurForm={setBlurForm} />}
                </div>
                <div className="PostNavStory profileSecondSec">
                  <SinglePlus />
                  {items.map((item) => (
                    <SingleStory key={item.id} item={item} />
                  ))}
                </div>
                <hr className="HrTag" />
                <div className="profileThirdSec">
                  <div className="headingProfile">
                    <span className="ProfilePagePostIcon">
                      <IoMdGrid />
                    </span>
                    <button
                      className="ProfilePagePostName"
                      onClick={HandlePosts}
                    >
                      Posts
                    </button>
                    <span className="ProfilePagePostIcon">
                      <BsBookmark />
                    </span>
                    <button
                      className="ProfilePagePostName"
                      onClick={HandleSavedPosts}
                    >
                      Saved
                    </button>
                  </div>
                  <div className="showPostsProfile">
                    {PostItems.length === 0 && (
                      <div className="PostsRenderProfile">
                        <h1 className="NoPostsProfile">There are no Posts</h1>
                      </div>
                    )}
                    {savedPost && (
                      <>
                        <h1 className="PostColors">Saved Posts</h1>
                        <ProfilePosts
                          Profileitems={SavedItems}
                          postState={savedPost}
                        />
                      </>
                    )}
                    {postState && (
                      <>
                        <h1 className="PostColors">Your Posts</h1>
                        <ProfilePosts
                          Profileitems={PostItems}
                          postState={postState}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMiddle;
