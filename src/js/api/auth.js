import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import db from "../db/firestore";
import { addDoc, collection, where, query, getDocs } from "firebase/firestore";

export const getUserProfile = async (uid) => {
  // TODO: this needs a fix, refer to the documentation.
  const q = query(collection(db, "profiles"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot[0].data());
};

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

export const login = ({ email, password }) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return getAuth().signOut();
};

export const onAuthStateChanges = (onAuth) => {
  const auth = getAuth();
  auth.onAuthStateChanged(onAuth);
};
