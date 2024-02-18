import React from "react";
import { useDispatch } from "react-redux";
import { ChatDisplayActions } from "../../store/ChatDisplay";

function MessageChatSub({ item }) {
  const dispatch = useDispatch();
  const handleChatImageName = (TotalItem) => {
    dispatch(ChatDisplayActions.DisplayValues(TotalItem));
  };
  return (
    <div className="OneSingleChat" onClick={() => handleChatImageName(item)}>
      <img src={item.image} className="singleChatImage" />
      <div className="SingleChatValues">
        <span className="SingleChatName">
          <b>{item.name}</b>
        </span>
        <span className="SignleChatDesc">{item.Bio}</span>
      </div>
    </div>
  );
}

export default MessageChatSub;
