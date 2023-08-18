import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const Authcontext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // email login
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   google login
  const signinwithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   signout
  const logout = () => {
    // localStorage.removeItem("accesss-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);

      //   if (curentUser) {
      //     axios
      //       .post("https://criptofia-server.vercel.app/jwt", {
      //         email: curentUser?.email,
      //       })
      //       .then((data) => {
      //         localStorage.setItem("accesss-token", data.data.token);
      //       });
      //   } else {
      //     localStorage.removeItem("accesss-token");
      //   }
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  //   useEffect(() => {
  //     if (user) {
  //       getRoleFromServer(user.email).then((res) => setRole(res));
  //     }
  //   }, [user]);

  const autherinfo = {
    auth,
    user,
    loading,
    signinwithGoogle,
    registerUser,
    emailLogin,
    logout,
  };
  return (
    <Authcontext.Provider value={autherinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
