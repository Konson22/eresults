import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";

export async function FetchBooks() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [books, setBooks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axiosInstance(
          "/books"
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
  
    return () => {
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  }
