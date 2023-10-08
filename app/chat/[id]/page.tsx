import { getUsers } from "@/lib/helper";
import ChatSidebar from "@/modules/ChatSidebar";
import MainScreen from "@/modules/MainScreen";

export default async function Home() {
  const fetchedUsers = await getUsers();

  return (
    <main className="flex h-screen overflow-hidden">
      <div className=" bg-whatapp-light dark:bg-whatapp-dark w-1/3 overflow-y-auto">
        <ChatSidebar data={fetchedUsers} />
      </div>
      <div className="w-full overflow-y-auto  bg-whatsapp-light dark:bg-whatsapp-dark">
        <MainScreen />
      </div>
    </main>
  );
}
