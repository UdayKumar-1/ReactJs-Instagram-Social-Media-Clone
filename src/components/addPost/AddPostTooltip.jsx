import React from "react";
function AddPostTooltip({TrueOrFalse}) {
  return (
    <>
    <div className="AddPostTooltipMain">
      {!TrueOrFalse && (
        <div className="TooltipAddPost">
          <p>added successfully!</p></div>
      )}
      </div>
    </>
  );
}

export default AddPostTooltip;
