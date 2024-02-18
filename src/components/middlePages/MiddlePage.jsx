import { useSelector } from "react-redux";
import PostItems from "../middlePages/PostItems";
import SingleStory from "../addStory/SingleStory";
import SinglePlus from "../addStory/SinglePlus";
const MiddlePage = () => {
  const items = useSelector((store) => store.StoryItems);
  return (
    <div className="middlePage">
      <div className="postbar">
        <div className="PostBarMain">
          <div className="postNavMain">
            <div className="PostNavStory">
              <SinglePlus/>
              {items.length === 0 && (
                <h1 className="NoStory">No Story Available</h1>
              )}
              {items.map((item) => (
                <SingleStory key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="postSection">
            <div className="PostItemOne">
            <PostItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiddlePage;
