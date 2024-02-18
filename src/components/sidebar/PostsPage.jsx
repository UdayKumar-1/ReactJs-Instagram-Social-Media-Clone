import React, { useState } from "react";
import BlurSavedImageHandle from "./BlurSavedImageHandle";

function PostsPage({ item, postState }) {
  const [blurForm, setBlurForm] = useState(false);
  const handleOpen = () => {
    setBlurForm(true);
  };
  return (
    <>
      {blurForm && (
        <BlurSavedImageHandle
          key={item.hashtags}
          item={item}
          setBlurForm={setBlurForm}
          postState={postState}
        />
      )}
      <span onClick={handleOpen}>
        {item.image && (
          <img src={item.image} className="PostShowImagesProfile" />
        )}
      </span>
    </>
  );
}

export default PostsPage;
