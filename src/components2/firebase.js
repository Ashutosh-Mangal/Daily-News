import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsHLy2yTh_Zjps5CGDiNAttaf3eq5SZ6I",
  authDomain: "newsmonkey-92e6c.firebaseapp.com",
  projectId: "newsmonkey-92e6c",
  storageBucket: "newsmonkey-92e6c.appspot.com",
  messagingSenderId: "1036673111681",
  appId: "1:1036673111681:web:d7bbcd3490feb28b4e9f80"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};