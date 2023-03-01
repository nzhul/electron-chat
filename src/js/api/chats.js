import db from "../db/firestore";
import { collection, getDocs } from "firebase/firestore";

export const fetchChats = async () => {
  const chatCol = collection(db, "chats");
  const chatSnap = await getDocs(chatCol);
  const chatList = chatSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return chatList;
};
