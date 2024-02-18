import SideBar from "../components/sidebar/SideBar";
import "../index.css"
import FollowBar from "../components/rightbar/FollowBar";
import MiddlePage from "../components/middlePages/MiddlePage";
const Home = () => {
  return (
    <div className="HomeMain">
      <SideBar />
      <MiddlePage />
      <FollowBar />
    </div>
  );
};
export default Home;
