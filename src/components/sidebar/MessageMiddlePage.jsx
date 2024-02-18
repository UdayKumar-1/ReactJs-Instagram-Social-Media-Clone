import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { MessagesSliceAction } from "../../store/MessageSent";
import MessagesText from "./MessagesText";
import SearchMiddlePage from "./SearchMiddlePage";
function MessageMiddlePage() {
  let NameImage = useSelector((store) => store.ChatDisplay);
  const InputValues = useRef("");
  const Message = useSelector((store) => store.MediaState);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const dispatch = useDispatch();
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
  const HandleEnter = (e) => {
    if (e.key == "Enter") {
      let newPosts = [];
      if (selectedFiles.length > 0) {
        newPosts = selectedFiles.map((file, index) => ({
          message: InputValues.current.value,
          image: imagePreviews[index],
        }));
      }
      console.log("NewPosts", newPosts);
      dispatch(MessagesSliceAction.MessagesAdd(e.target.value));
      {
        selectedFiles.length &&
          dispatch(MessagesSliceAction.VideoImageAdd(newPosts));
      }
      setSelectedFiles([]);
      setImagePreviews([]);
    }
  };
  const HandleSend = () => {
    let newPosts = [];
    if (selectedFiles.length > 0) {
      newPosts = selectedFiles.map((file, index) => ({
        message: InputValues.current.value,
        image: imagePreviews[index],
      }));
    }
    dispatch(MessagesSliceAction.MessagesAdd(InputValues.current.value));
    {
      selectedFiles.length &&
        dispatch(MessagesSliceAction.VideoImageAdd(newPosts));
    }
    setSelectedFiles([]);
    setImagePreviews([]);
  };
  return (
    <>
      {/* <div className="color">Hello</div> */}

      <div className="middlePage">
        {NameImage.length == 0 && <SearchMiddlePage />}
        <div className="postbar">
          <div className="">
            <div className="addStoryMiddle">
              <div className="px-4 py-5 my-5">
                <div className="MessagesNavMain">
                  {NameImage != 0 && (
                    <div className="MessagesNav">
                      {NameImage.length > 0 && (
                        <>
                          <img
                            src={NameImage[0].image}
                            className="MessagesChatImage"
                          />

                          <span className="ChatMessagesName">
                            {<b>{NameImage[0].name}</b>}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                  {NameImage.length != 0 && <hr />}
                  {Message &&
                    Message.map((item, index) => (
                      <MessagesText key={index} item={item} />
                    ))}
                  {NameImage.length != 0 && (
                    <footer>
                      <div className="MessageBody">
                        <input
                          type="text"
                          className="footerInput"
                          placeholder="Message...."
                          ref={InputValues}
                          onKeyDown={(e) => HandleEnter(e)}
                        />
                        <label
                          htmlFor="FileValue"
                          className="custom-file-label"
                        >
                          <GrGallery className="Gallery" />
                        </label>
                        <input
                          id="FileValue"
                          type="file"
                          className="VideoUpload"
                          onChange={(e) => handleFileChange(e)}
                        />
                        <button className="Sendbtn">
                          <IoSend onClick={() => HandleSend()} />
                        </button>
                      </div>
                    </footer>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageMiddlePage;
