import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Eelen",
      image:
        "https://www.kindpng.com/picc/m/41-415494_profile-picture-in-circle-hd-png-download.png",
      message: "Whats up ♥",
    },
    {
      name: "Eelen",
      image:
        "https://www.kindpng.com/picc/m/41-415494_profile-picture-in-circle-hd-png-download.png",
      message: "How its going ♥",
    },
    {
      message: "Hello ♥",
    },
  ]);

  const clickHandle =  (e) => {
    e.preventDefault();
    setMessages([...messages, {message:input}]);
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCH WITH ELEN ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.message}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        />
        <button type="submit" onClick={clickHandle} className="chatScreen__button">Send</button>
      </form>
    </div>
  );
};

export default ChatScreen;
