import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from "../db/firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";

export async function register({ email, password, username, avatar }) {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const createUserProfile = await addDoc(collection(db, "profiles"), {
      uid: user.uid,
      username: username,
      email: email,
      avatar: avatar,
      joinedChats: [],
    });
  } catch (error) {
    Promise.reject(error.message);
  }
}

export const onAuthStateChanges = (onAuth) => {
  const auth = getAuth();
  auth.onAuthStateChanged(onAuth);
};
