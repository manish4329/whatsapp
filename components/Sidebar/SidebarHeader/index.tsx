"use client";
import AppModel from "@/components/AppModel";
import DropDownProfile from "@/components/common/DropDownProfile";
import UserAvatar from "@/components/common/UserAvatar";
import ThemeButton from "@/components/theme/ThemeButton";
import { auth } from "@/lib/firebase";
import {
  AccountCircle,
  ChatOutlined,
  DataUsage,
  GroupsOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const SidebarHeader: React.FC = () => {
  const isLoggedIn = auth?.currentUser;

  return (
    <div className="flex justify-evenly items-center p-4 border-b border-y-gray-200 bg-whatsapp-light dark:bg-whatsapp-dark z-10">
      <div>
        {isLoggedIn !== null ? (
          <UserAvatar
            image={isLoggedIn?.photoURL as string}
            alt={String(isLoggedIn?.email)}
          />
        ) : (
          <IconButton>
            <AccountCircle className="rounded-full cursor-pointer hover:opacity" />
          </IconButton>
        )}
      </div>
      <IconButton>
        <GroupsOutlined />
      </IconButton>
      <IconButton>
        <DataUsage />
      </IconButton>
      <IconButton>
        <AppModel
          icon={<ChatOutlined />}
          title="All contacts"
          modalType="chat"
        />
      </IconButton>
      <ThemeButton />
      <DropDownProfile />
    </div>
  );
};

export default SidebarHeader;
