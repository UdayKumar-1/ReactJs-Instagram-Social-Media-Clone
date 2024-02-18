import React, { useRef } from "react";

function AddStoryTooltip() {
  const trackName=useRef("");
  return <div className="AddStoryToolTipHeading">
    <p>Hello How are You</p>
    <input type="text" ref={trackName}/>
    <input type="file" name="" id="" />
  </div>;
}

export default AddStoryTooltip;
