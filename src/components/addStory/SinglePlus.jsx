import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

function SinglePlus() {
  return (
    <div className="oneStory">
      <Link to="/addstory" className="story">
        <CiCirclePlus className="PlusIconStory" />
      </Link>
      <p className="NewStory">New Story</p>
    </div>
  );
}

export default SinglePlus;
