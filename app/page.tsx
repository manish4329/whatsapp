import Image from "next/image";
import BackgroundImage from "../public/whatsapp-login-page-light.png";
import ChatSidebar from "@/modules/ChatSidebar";
import { getUsers } from "@/lib/helper";

export default async function Home() {
  const fetchedUsers = await getUsers();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className=" bg-whatapp-light dark:bg-whatapp-dark w-1/3 overflow-y-auto">
        <ChatSidebar data={fetchedUsers} />
      </div>
      <div className="w-full overflow-y-auto flex justify-center items-center bg-whatsapp-light dark:bg-whatsapp-dark">
        <Image
          // priority={true}
          className="h-auto w-auto object-fill"
          src={BackgroundImage}
          alt="whatapp image Logo"
        />
      </div>
    </main>
  );
}
