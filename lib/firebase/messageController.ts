import {
  arrayUnion,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { auth, firestoreApp } from ".";
import { getSingleUserFromFirestore } from "./userController";

export const firestore = getFirestore(firestoreApp);

export const chatsCollection = collection(firestore, "chats");

export const createNewChat = async (messageText: string, routerId: string) => {
  const currentUser = auth?.currentUser;
  const recipientDetails = await getSingleUserFromFirestore(routerId);
  console.log(recipientDetails, "recipient");
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
          // messageRecipient: recipientDetails?.email,
          // messageRecipientId: recipientDetails?.uid,
        }),
      },
    },
    { merge: true }
  );
};
