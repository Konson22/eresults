import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../../components/BookCard";

export default function RelatedOnlineBookSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

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
          setBooks(
            results.data.items.filter((item) => item.accessInfo.pdf.isAvailable)
          );
        }
      } catch (error) {
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

  return (
    <div className="flex-1 border md:p-7 p-3 rounded-md bg-white mt-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="md:text-xl">Suggested Books</h3>
        <div className="flex">
          <div className="md:block hidden">
            <span className="border px-3 py-1 rounded-md">All books</span>
            {[...new Array(4)].map((_, index) => (
              <span className="border px-3 py-1 rounded-md ml-2" key={index}>
                Senior {index + 1}
              </span>
            ))}
          </div>
          <select className="border-gray-200 rounded-md md:hidden block md:py-2 py-1">
            <option className="bg-tr focus:outline-none focus-within:outline-none focus:border-none px-3 rounded-md">
              All
            </option>
            {[...new Array(4)].map((_, index) => (
              <option key={index}>Senior {index + 1}</option>
            ))}
          </select>
        </div>
      </div>
      {isLoading && "Loading..."}
      {!isLoading && books && (
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 md:mt-4 mt-4">
          {books.map(
            (book) =>
              book.volumeInfo.imageLinks && (
                <BookCard
                  pageCount={book.volumeInfo.pageCount}
                  title={book.volumeInfo.title}
                  image={book.volumeInfo.imageLinks.thumbnail}
                />
              )
          )}
        </div>
      )}
    </div>
  );
}
