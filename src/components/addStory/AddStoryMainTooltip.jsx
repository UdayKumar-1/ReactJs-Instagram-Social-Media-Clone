import React from "react";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function AddStoryMainTooltip({item}) {
  return (
    <div className="ContainerMain">
      <div className="storyImageMain">
        <div className="ForStoryImage">
          <div className="StoryIcons">
            <span>
              <MdDelete className="StoryDeleteIcon" />
            </span>
            <Link to="/home">
              <RxCross1 className="StoryCross" />
            </Link>
          </div>
          <img src={item.image} className="storyMainImage" />
        </div>
      </div>
    </div>
  );
}

export default AddStoryMainTooltip;
