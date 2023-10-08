import { AllUsersType } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  data: AllUsersType;
};

const Chat: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white dark:bg-whatsapp-chats-bg border-b border-gray-400 hover:bg-gray-200 overflow-hidden cursor-pointer">
      <div className="flex justify-start items-center gap-4">
        <Image
          src={data?.image}
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-start justify-start">
            <p>{data?.firstName}</p>
            <p className="text-gray-500 truncate w-1/2">This is message body</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">10:39</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
