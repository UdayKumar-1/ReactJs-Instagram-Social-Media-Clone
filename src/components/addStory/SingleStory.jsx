import { useState } from "react";
import BlurStoryImageHandle from "./BlurStoryImageHandle";

function SingleStory({ item }) {
  const [blurForm, setBlurForm] = useState(false);
  const handleOpen = () => {
    setBlurForm(true);
  };
  return (
    <>
      {blurForm && (
        <BlurStoryImageHandle
          key={item.id}
          item={item}
          setBlurForm={setBlurForm}
        />
      )}
      <div className="oneStory">
        <button className="story" onClick={handleOpen}>
          <img src={item.image} className="storyImages" alt={item.Name} />
        </button>
        <p className="storyText">{item.Name}</p>
      </div>
    </>
  );
}

export default SingleStory;

// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
// onClick={handleTooltipClick}
// const [tooltipVisible, setTooltipVisible] = useState(false);
// const [tooltipClicked, setTooltipClicked] = useState(false);

// const handleMouseEnter = () => {
//   if (!tooltipClicked) {
//     setTooltipVisible(true);
//   }
// };

// const handleMouseLeave = () => {
//   // Do not hide the tooltip if it's clicked
//   if (!tooltipClicked) {
//     setTooltipVisible(false);
//   }
// };
// const handleTooltipClick = () => {
//   setTooltipClicked((prev) => !prev);
// };
// const handleBodyClick = (e) => {
//   // Checking if the click is not within the component
//   if (!e.target.closest(".oneStory")) {
//     setTooltipVisible(false);
//   }
// };
// useEffect(() => {
//   // Add event listener when the component mounts
//   document.body.addEventListener("click", handleBodyClick);
//   // Cleanup the event listener when the component unmounts
//   return () => {
//     document.body.removeEventListener("click", handleBodyClick);
//   };
// }, []);
