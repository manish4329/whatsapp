import { auth } from "@/lib/firebase";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutButton: React.FC = () => {
  const router = useRouter();
  const SignOutFromWhatsapp = () => {
    auth.signOut();
    router.push("/login");
  };
  return (
    <div className="flex flex-col relative">
      <Button onClick={SignOutFromWhatsapp}>Log out</Button>
    </div>
  );
};

export default SignOutButton;
