import { useDispatch, useSelector } from "react-redux";
import { ProfileSliceActions } from "../../store/ProfileSlice";

function ProfileSwitch({ item }) {
  const followBtn = useSelector((store) => store.ProfileItems);
  // console.log("followItems", followBtn);
  const dispatch = useDispatch();
  const handleCount = (Id) => {
    if (Id > 1) {
      // console.log("noofFollowers",followBtn[0].noOfFollowers)
      // console.log(Id)
      dispatch(ProfileSliceActions.updatingFollowBtn(Id));
      {
        followBtn[0].toggleFollow[Id]
          ? dispatch(
              ProfileSliceActions.updateFollowers(
                followBtn[0].noOfFollowers - 1
              )
            )
          : dispatch(
              ProfileSliceActions.updateFollowers(
                followBtn[0].noOfFollowers + 1
              )
            );
      }
    }
  };
  return (
    <div className="main_switch">
      <div className="imgflexMain">
        <img src={item.image} className="imgflex" />
      </div>
      <div className="accDetails">
        <div className="Name">{item.name}</div>
        <div className="descr">{item.descr}</div>
      </div>
      <div className="switchName">
        <button className="aLink" onClick={() => handleCount(item.id)}>
          {item.id == 1
            ? "Switch"
            : item.id != 1 && followBtn[0].toggleFollow[item.id]
            ? "UnFollow"
            : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default ProfileSwitch;
