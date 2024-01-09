import SearchBar from "../../components/SearchBar";
import BookCard from "../../components/BookCard";
import AnimatePage from "../../components/AnimatePage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("education");

  const URL = "https://www.googleapis.com/books/v1/volumes?q=";
  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axios(`${URL}${query}`).then((res) => res);
        if (isMuted) {
          setBooks(
            results.data.items.filter((item) => item.accessInfo.pdf.isAvailable)
          );
        }
      } catch (error) {
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
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e);
  };
  // console.log(books[0].accessInfo.pdf.isAvailable);

  return (
    <AnimatePage cName="md:px-[10%] px-5 mt-4">
      <SearchBar handleSearch={handleSearch} />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-4">
        {isLoading && <span className="p-14 text-xl">Loading...</span>}
        {!isLoading &&
          books.length > 0 &&
          books.map((book) => <BookCard book={book} key={book.id} />)}
      </div>
    </AnimatePage>
  );
}
