import React, { useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { PostItemActions } from "../../store/PostItemsSlice";
import { PostAddTooltipActions } from "../../store/PostAddTooltipSlice";
import { Link } from "react-router-dom";
import { ProfileSliceActions } from "../../store/ProfileSlice";
import UploadImagebtns from "./UploadImagebtns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddPostMiddle() {
  const ProfileItems = useSelector((store) => store.ProfileItems);
  const [Id, setId] = useState("");
  const [name, setName] = useState("Uday Kumar");
  const [desc, setDesc] = useState("Mumbai");
  const [like, setlike] = useState("");
  const sethashtags = useRef("");
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleFileChange = () => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handlePost = () => {
    const newPosts = selectedFiles.map((file, index) => ({
      id: Id,
      image: imagePreviews[index],
      heading: name,
      desc: desc,
      likeCount: like,
      hashtags: sethashtags.current.value,
    }));
    dispatch(PostItemActions.addPost(newPosts));
    // dispatch(PostAddTooltipActions.PostAddMethod(!postAdd));
    // Hide the tooltip after a certain duration (e.g., 3 seconds)
    dispatch(
      ProfileSliceActions.updatePostCount(ProfileItems[0].noOfPosts + 1)
    );
    // Clear selected files and previews
    console.log(selectedFiles, sethashtags.current.value);
    if (selectedFiles.length > 0 && sethashtags.current.value !== "") {
      toast.success("Post Uploaded Successfully!", {
        position: "top-right",
      });
    }
    setSelectedFiles([]);
    setImagePreviews([]);
  };

  return (
    <div className="middlePage">
      <div className="postbar ">
        <div className="PostBarMain">
          <div className="addStoryMiddle">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold text-light">AddPost Here</h1>
              <div className="col-lg-6 mx-auto">
                <input
                  type="text"
                  placeholder="About Post"
                  className="StoryId"
                  ref={sethashtags}
                  required
                />
                <UploadImagebtns handleFileChange={handleFileChange} />
                <button
                  className="btn btn-primary btn-lg px-4 AddPostBtn"
                  onClick={handlePost}
                >
                  Add Post
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPostMiddle;
