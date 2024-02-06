import { useState, useContext, createContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config";
import booksJson from "../assets/bookJson.json";
import axiosInstance from "../hooks/useAxios";
// import axiosInstance from "../hooks/useAxios";

const contextApi = createContext();

export default function CotextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);
  const [showForms, setShowForms] = useState(null);
  const [books, setBooks] = useState([]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setProfile(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(false);
    setMessage("");
    setBooks(booksJson);
    const controller = new AbortController();

    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile({
          name: user.displayName,
          email: user.email,
          userID: user.uid,
          avatar: user.photoURL,
        });
      }
      verifyAuth();
    });
    return () => {
      listen();
      controller.abort();
      // isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyAuth = async () => {
    try {
      const results = await axiosInstance.get("/auth").then(async (res) => res);
      setProfile(results.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response?.data);
      } else {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const values = {
    isLoading,
    message,
    showForms,
    profile,
    books,
    setShowForms,
    signOutUser,
    setProfile,
  };
  return <contextApi.Provider value={values}>{children}</contextApi.Provider>;
}

export const useContextApi = () => useContext(contextApi);
