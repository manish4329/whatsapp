"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const Search: React.FC = () => {
  return (
    <div className="flex sticky top-0 bg-white dark:bg-whatsapp-chats-bg justify-between items-center px-4 h-20 w-full border-b overflow-hidden border-gray-400 gap-2">
      <div className="flex items-start bg-whatsapp-light dark:bg-whatsapp-dark px-4 py-2 border-r-16 gap-4 rounded-lg w-full">
        <SearchIcon className="text-gray-600" />
        <input
          id="search"
          className="border-none outline-0 bg-whatsapp-light dark:bg-whatsapp-dark w-full"
          placeholder="Search in chats"
          type="text"
        />
      </div>
      <FilterListIcon />
    </div>
  );
};

export default React.memo(Search);
