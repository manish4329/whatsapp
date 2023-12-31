import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { auth, firestoreApp } from ".";
import { getSingleUserFromFirestore } from "./userController";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const firestore = getFirestore(firestoreApp);

export const chatsCollection = collection(firestore, "chats");

export const createNewChat = async (messageText: string, routerId: string) => {
  const currentUser = auth?.currentUser;
  const recipientDetails = await getSingleUserFromFirestore(routerId);
  const chatRef = doc(firestore, "chats", routerId);
  await setDoc(
    chatRef,
    {
      link: routerId,
      messages: {
        message: arrayUnion({
          messageBody: messageText,
          createdAt: new Date(),
          messageSender: currentUser?.email,
          messageSenderId: currentUser?.uid,
          // this is only used for the first index of the Array
          messageRecipient: recipientDetails?.email,
          messageRecipientId: recipientDetails?.uid,
        }),
      },
    },
    { merge: true }
  );
};

export const getSingleChatFromFirestore = async (chatId: string) => {
  if (!chatId) return;
  const chatRef = doc(firestore, `chats/${chatId}`);
  const chatSnap = await getDoc(chatRef);
  if (chatSnap.exists()) {
    const chat = chatSnap.data();
    return chat;
  } else {
    console.log("No such document!");
  }
};

export const deleteChatFromFireStore = async (
  chatId: string,
  router: AppRouterInstance
) => {
  const chatRef = doc(firestore, `chats/${chatId}`);
  await deleteDoc(chatRef);
  console.log("chat deleted");
  router.push("/");
};
