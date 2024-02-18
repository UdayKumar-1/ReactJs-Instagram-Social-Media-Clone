import { useSelector } from "react-redux";
import ProfileSwitch from "../sidebar/ProfileSwitch";
import Suggestions from "./Suggestions";
const FollowBar = () => {
  const items = useSelector((store) => store.switchItems);
  return (
    <>
      <div className="rightBar">
        <div className="rightBarMain">
          {items.map(
            (item) => item.id < 2 && <ProfileSwitch key={item.id} item={item} />
          )}
          <Suggestions />
          {items.map(
            (item) => item.id > 1 && <ProfileSwitch key={item.id} item={item} />
          )}
          <div className="footersec">
            © 2023 INSTAGRAM Clone FROM OwnCompany
          </div>
        </div>
      </div>
    </>
  );
};
export default FollowBar;
