import React from "react";
import { useSelector } from "react-redux";
import MessageChatSub from "./MessageChatSub";
function MessagesSideBar() {
  const ChatItems = useSelector((store) => store.SearchedItems);
  // console.log(ChatItems);
  return (
    <div className="searchBarMain d-flex flex-column flex-shrink-0 p-3  sidebar">
      <div className="MessagePageAccname">Uday Kumar</div>
      <hr className="HrTag" />
      <div className="searchBar">
        <span className="whiteMessages">
          <b>Messages</b>
        </span>
        <span className="whiteRequest">Requests</span>
      </div>
      {ChatItems.map((item) => (
        <MessageChatSub key={item.name}item={item}/>
      ))}
    </div>
  );
}

export default MessagesSideBar;
