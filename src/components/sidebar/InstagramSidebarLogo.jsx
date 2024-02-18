import React from "react";
import { Link } from "react-router-dom";
import InstagramLogo from "./InstagramLogo";

function InstagramSidebarLogo() {
  return (
    <>
      <Link
        to="/home"
        href=""
        className="d-flex align-items-center text-white text-decoration-none"
      >
        <div className="InstaLogo">
          <InstagramLogo />
        </div>
      </Link>
      <hr className="hrSidebar" />
    </>
  );
}

export default InstagramSidebarLogo;
