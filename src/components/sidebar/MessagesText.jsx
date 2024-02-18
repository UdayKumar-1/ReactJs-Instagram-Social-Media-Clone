import React from "react";

function MessagesText({ item }) {
  console.log(item);
  return (
    <div className="ChatMessagesImages">
      {item.message && <p className="MessageSending">{item.message}</p>}
      {item.image && <img src={item.image} className="MessageSentImage" />}
    </div>
  );
}

export default MessagesText;
