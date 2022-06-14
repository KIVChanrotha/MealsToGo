import { auth } from "./firebase.service";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export { auth, loginRequest, createUser };
