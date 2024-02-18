import React, { useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { StoryItemsActions } from "../../store/StoryItemsSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddStoryMiddle() {
  const postAdd = useSelector((store) => store.addPost);
  const setId = useRef("");
  const setName = useRef("");
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleFileChange = () => {
    const newFiles = Array.from(event.target.files);
    // console.log(newFiles);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    // console.log(selectedFiles);
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
        // console.log(imagePreviews);
      };
      reader.readAsDataURL(file);
    });
  };
  const handlePost = () => {
    const newPosts = selectedFiles.map((file, index) => ({
      id: setId.current.value,
      image: imagePreviews[index],
      Name: setName.current.value,
    }));
    // console.log(newPosts);
    dispatch(StoryItemsActions.addStory(newPosts));
    if (selectedFiles.length > 0 && setId != "" && setName != "") {
      toast.success("Story Uploaded Successfully!", {
        position: "top-right",
      });
    }
    // Clear selected files and previews
    setSelectedFiles([]);
    setImagePreviews([]);
  };
  return (
    <div className="middlePage">
      <ToastContainer />
      <div className="postbar ">
        <div className="PostBarMain">
          <div className="addStoryMiddle">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold text-light">AddStory Here</h1>
              <div className="col-lg-6 mx-auto">
                <input
                  type="text"
                  placeholder="Enter Your Id"
                  className="StoryId"
                  ref={setId}
                />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="StoryId"
                  ref={setName}
                />
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4 gap-3"
                  >
                    <input
                      className="fileType"
                      type="file"
                      onChange={handleFileChange}
                      multiple
                    />
                    <MdOutlineCloudUpload className="UploadBtn" />
                  </button>
                </div>
                <button
                  className="btn btn-primary btn-lg px-4 AddPostBtn"
                  onClick={handlePost}
                >
                  Add Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStoryMiddle;
