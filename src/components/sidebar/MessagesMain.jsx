import React from "react";
import MessageMiddlePage from "./MessageMiddlePage";
import MessagesSideBar from "./MessagesSideBar";

function MessagesMain() {
  return (
    <div className="HomeMain">
      <MessageMiddlePage />
      <MessagesSideBar />
    </div>
  );
}

export default MessagesMain;
