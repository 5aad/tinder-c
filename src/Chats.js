import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo Whats up!"
        timestamp="40 seconds ago"
        profilePic="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
      />
      <Chat
        name="Ellen"
        message="Whats up 🚑?"
        timestamp="40 seconds ago"
        profilePic="data:image/jpeg;base64,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"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="40 seconds ago"
        profilePic="https://www.kindpng.com/picc/m/41-415494_profile-picture-in-circle-hd-png-download.png"
      />
      <Chat
        name="Sarib"
        message="there is he 😂"
        timestamp="40 seconds ago"
        profilePic="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"
      />
    </div>
  );
};

export default Chats;
