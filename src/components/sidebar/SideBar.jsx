import { Link } from "react-router-dom";
import { sideBarItems } from "../../store/Story";
import SearchBar from "./SearchBar";
import { useState } from "react";
import InstagramSidebarLogo from "./InstagramSidebarLogo";
const SideBar = () => {
  const [checkSearchClick, setSearchClick] = useState(false);
  const handleClickedSearch = () => {
    setSearchClick(!checkSearchClick);
  };
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
      <InstagramSidebarLogo />
      <div className="nav nav-pills flex-column mb-auto hrSidebar sidebarrNavs">
        {sideBarItems.map((item) =>
          item.path === "/search" ? (
            <>
              {checkSearchClick && <SearchBar className="search-bar" />}
              <Link
                onClick={handleClickedSearch}
                to={item.path}
                key={item.title}
                className="nav-link text-light sidebarMainItems"
              >
                {<item.icon className="SideIcons" />}
                <span className="SideIconsText">{item.title}</span>
              </Link>
            </>
          ) : (
            <>
              <Link
                to={item.path}
                key={item.title}
                className="nav-link text-light sidebarMainItems"
              >
                {<item.icon className="SideIcons" />}
                <span className="SideIconsText">{item.title}</span>
              </Link>
            </>
          )
        )}
      </div>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="me.jpg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2 profilePic"
          />
          <strong>UdayKumar</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link to="/signup" className="dropdown-item">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
