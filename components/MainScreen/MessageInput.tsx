"use client";
import { createNewChat } from "@/lib/firebase/messageController";
import { Add, KeyboardVoice, Mood } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const MessageInput: React.FC = () => {
  const params = useParams();
  const [message, setMessage] = useState("");
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === "") return;
    createNewChat(message, params?.id);
    setMessage("");
  };
  return (
    <div className="sticky bottom-0 z-10 h-20 bg-gray-200 border-gray-400 flex flex-1 items-center justify-between p-4">
      <IconButton>
        <Add />
      </IconButton>
      <form
        name="messageInput"
        className="flex flex-row w-full"
        onSubmit={sendMessage}
      >
        <IconButton>
          <Mood />
        </IconButton>
        <input
          name="message"
          type="text"
          placeholder="Type a message"
          className="w-full rounded-lg p-2 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <IconButton>
        <KeyboardVoice />
      </IconButton>
    </div>
  );
};

export default MessageInput;
