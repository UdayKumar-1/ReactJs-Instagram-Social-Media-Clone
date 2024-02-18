import React from "react";
import { Link } from "react-router-dom";

function EmptyPostsMessage() {
  return (
    <div className="ContainerMain">
      <h1>There are no Posts Here</h1>
      <Link to="/addpost" className="btn btn-primary addPostButton">Add Post</Link>
    </div>
  );
}

export default EmptyPostsMessage;
