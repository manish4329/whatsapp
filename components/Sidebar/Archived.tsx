"use client";

import { MoveToInbox } from "@mui/icons-material";
import React from "react";

const Archived = () => {
  return (
    <div className="flex items-center justify-start py-4 px-6 w-full bg-white dark:bg-whatsapp-chats-bg border-b border-gray-400">
      <MoveToInbox className="mx-4" />
      <p className="bg-white dark:bg-whatsapp-chats-bg pl-2">Archived</p>
    </div>
  );
};

export default React.memo(Archived);
