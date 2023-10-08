"use client";
import {
  AccountCircle,
  LocalPhoneOutlined,
  SearchOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React from "react";
import DropDownChat from "../common/DropDownChat";

const MainSrceenHeader: React.FC = () => {
  // fetch user data for the chat that I am based on the params id with useEffect.
  return (
    <div className="sticky top-0 p-4 border-b border-y-gray-200 bg-whatsapp-light dark:bg-whatsapp-dark z-10 flex items-center justify-between">
      <div>
        <IconButton>
          <AccountCircle color={"primary"} />
        </IconButton>
      </div>
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
        <DropDownChat />
      </div>
    </div>
  );
};

export default MainSrceenHeader;
