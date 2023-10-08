import SidebarHeader from "@/components/Sidebar/SidebarHeader";
import Search from "@/components/Sidebar/Search";
import React from "react";
import Archived from "@/components/Sidebar/Archived";
import { AllUsers, AllUsersType } from "@/types";
import Chat from "@/components/Sidebar/Chat";

type Props = {
  data: AllUsers;
};

const ChatSidebar: React.FC<Props> = ({ data }) => {
  const { users } = data;
  return (
    <div className="w-full h-full bg-white dark:bg-whatsapp-chats-bg">
      <SidebarHeader />
      <Search />
      <Archived />
      {/* chats */}
      <div className="bg-white dark:bg-whatsapp-chats-bg">
        {!!users &&
          users?.map((user: AllUsersType) => (
            <Chat key={user.id} data={user} />
          ))}
      </div>
      <p className="text-center text-sm p-2">
        Your personal messages are end-to-end encrypted
      </p>
    </div>
  );
};

export default ChatSidebar;
