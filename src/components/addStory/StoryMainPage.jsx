import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddStoryMainTooltip from "./AddStoryMainTooltip";
function StoryMainPage() {
  const { id } = useParams();
  const storyItems = useSelector((store) => store.StoryItems);
  const [storyData, setStoryData] = useState([]);
  useEffect(() => {
    const data = storyItems.filter((item) => item.id == id);
    setStoryData(data);
  }, [id]);
  // console.log(storyData);
  return (
    <>
      {storyData &&
        storyData.map((item) => (
          <AddStoryMainTooltip key={item.id} item={item} />
        ))}
    </>
  );
}

export default StoryMainPage;
