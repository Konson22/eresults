import { useState, useContext, createContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config";
import axios from "axios";

const contextApi = createContext();

export default function CotextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [showForms, setShowForms] = useState(null);
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setProfile(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axios(
          "https://www.googleapis.com/books/v1/volumes?q=math"
        ).then((res) => res);
        if (isMuted) {
          setBooks(results.data.items);
        }
      } catch (error) {
        if (
          error.status === 404 ||
          error.status === 403 ||
          error.status === 500
        ) {
          return setMessage(error?.response?.data);
        }
        setMessage("Error Occures!");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile({
          name: user.displayName,
          email: user.email,
          userID: user.uid,
          avatar: user.photoURL,
        });
      }
    });
    return () => {
      listen();
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = {
    isLoading,
    message,
    showForms,
    profile,
    books,
    setShowForms,
    signOutUser,
  };
  return <contextApi.Provider value={values}>{children}</contextApi.Provider>;
}

export const useContextApi = () => useContext(contextApi);
