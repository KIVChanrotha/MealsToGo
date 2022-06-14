import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-NlAz6MrchB8NnaTaSWchhwBg36Y_sHo",
  authDomain: "mealstogo-2ffad.firebaseapp.com",
  projectId: "mealstogo-2ffad",
  storageBucket: "mealstogo-2ffad.appspot.com",
  messagingSenderId: "396589097227",
  appId: "1:396589097227:web:dd4fff63f73193c34ec20e",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
