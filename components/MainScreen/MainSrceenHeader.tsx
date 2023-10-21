"use client";
import {
  AccountCircle,
  DeleteOutline,
  LocalPhoneOutlined,
  SearchOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DropDownChat from "../common/DropDownChat";
import {
  deleteChatFromFireStore,
  getSingleChatFromFirestore,
} from "@/lib/firebase/messageController";
import { useParams, useRouter } from "next/navigation";
import { handleContactInfo } from "./helper";
import { DocumentData } from "firebase/firestore";
import UserAvatar from "../common/UserAvatar";

const MainSrceenHeader: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  // fetch user data for the chat that I am based on the params id with useEffect.
  const [open, setOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState<
    null | DocumentData | undefined
  >(null);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // get chat from the firestore if exists
    getSingleChatFromFirestore(params?.id)
      .then(async (chat) => {
        // check the user if they are sender or receiver
        const filterContact = await handleContactInfo(chat, params?.id);
        setContactInfo(filterContact);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [params?.id]);
  return (
    <div className="sticky top-0 p-4 border-b border-y-gray-200 bg-whatsapp-light dark:bg-whatsapp-dark z-10 flex items-center justify-between">
      {contactInfo ? (
        <div className="flex items-center gap-2">
          <UserAvatar image={contactInfo?.photo} alt={contactInfo?.name} />
          <strong className="p-2 ">{contactInfo?.name}</strong>
        </div>
      ) : (
        <IconButton>
          <AccountCircle color={"primary"} />
        </IconButton>
      )}
      <div className="flex gap-6 items-center">
        <IconButton>
          <VideocamOutlined />
        </IconButton>
        <IconButton>
          <LocalPhoneOutlined />
        </IconButton>
        <Divider orientation="vertical" flexItem={true} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton onClick={() => deleteChatFromFireStore(params?.id, router)}>
          <DeleteOutline />
        </IconButton>
        <DropDownChat />
      </div>
    </div>
  );
};

export default MainSrceenHeader;
