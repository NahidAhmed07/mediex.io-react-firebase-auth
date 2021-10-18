import { useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState("")



  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result=> setUser(result.user))
  }

  return {
    user,
    setUser,
    googleSignIn
  }
}



export default useFirebase;