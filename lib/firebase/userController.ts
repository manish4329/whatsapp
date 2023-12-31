import { User } from "firebase/auth";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { firestoreApp } from ".";

export const firestore = getFirestore(firestoreApp);

export const usersCollection = collection(firestore, "users");

export const addUserToFirestore = async (user: User) => {
  // if user already exists in firestore collection, update the last seen to now
  // if user exists add the user to the firestore, add the user to firestore.
  const userRef = doc(firestore, "users", user.uid);
  await setDoc(
    userRef,
    {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      lastOnline: serverTimestamp(),
    },
    { merge: true }
  );
};

export function getSnapshotDoc(doc: DocumentData) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export const getSingleUserFromFirestore = async (userId: string) => {
  if (!userId) return;
  const userRef = doc(firestore, `users/${userId}`);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const user = userSnap.data();
    return user;
  } else {
    console.log("No such document!");
  }
};
