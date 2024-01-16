import axios from "axios";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import BackBtn from "../utils/BackBtn";

export default function BooksPage() {
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

  return (
    <div className="md:px-[8%] px-4 py-4">
      <div className="md:flex items-center justify-between">
        <div className="flex">
          <BackBtn />
          Books
        </div>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
        {isLoading &&
          [...new Array(5)].map(() => (
            <div className="w-full">
              <div className="md:h-[160px] h-[150px] bg-gray-100"></div>
            </div>
          ))}
        {!isLoading &&
          books.length > 0 &&
          books.map(
            (book) =>
              book.volumeInfo.imageLinks && (
                <BookCard
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                />
              )
          )}
      </div>
    </div>
  );
}

/*
<div className="w-full bg-white shadow-md rounded overflow-hidden">
                {book.volumeInfo.imageLinks && (
                  <img
                    className="md:h-[120px] h-[140px]"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                )}
                <div className="p-3">
                  {console.log(book.volumeInfo)}
                  <h3 className="md:line-clamp-2">{book.volumeInfo.title}</h3>
                </div>
              </div>*/
