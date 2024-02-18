import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";
function SearchMiddlePage() {
  return (
    <div className="middlepage">
      <div className="postbar ">
        <div className="">
          <div className="addStoryMiddle">
            <div className="px-4 py-5 my-5 text-center">
              <div className="searchBarMiddlePageMain">
                <FaFacebookMessenger className="MessangerIcon" />
                <div className="SearchHeading">Your Messages </div>
                <Link to="/messages" className="btn btn-primary sendMessage">
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMiddlePage;
