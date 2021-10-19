import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import {
  getAuth,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({})
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  

  // google sign in function 
  const googleSignIn = () => {
   return signInWithPopup(auth, googleProvider)
    
  }

  // Sign in with github 
  const githubSignIn = () => {
    setIsLoading(true);
   return signInWithPopup(auth, githubProvider)
  }

  // onstate change set user 
  useEffect(() => {
    setIsLoading(true);
   const unSubscribe =  onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setIsLoading(false)
        setError("")
      }
      else {
        setUser({})
        setIsLoading(false)
        setError("")
      }
   })
    return () => unSubscribe;
  }, []);


  // logout function
  const logOutUser = () => {
    signOut(auth).then(() => setUser({}))
  }

  // Create a new user  with email and password 
  const createNewUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)

  }

  // add user display name 
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => { })
      .catch(err => setError(err.message));
  }

  // login with email and password 
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password )
  }

  return {
    user,
    error,
    isLoading,
    setIsLoading,
    setUser,
    setError,
    googleSignIn,
    logOutUser,
    createNewUser,
    updateUserName,
    loginWithEmail,
    githubSignIn,
  };
}

export default useFirebase;