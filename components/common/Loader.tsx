"use client";

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader: React.FC = () => {
  return (
    <div className="grid place-items-center bg-whatsapp-light dark:bg-whatsapp-dark h-screen">
      <CircularProgress />
    </div>
  );
};

export default React.memo(Loader);
