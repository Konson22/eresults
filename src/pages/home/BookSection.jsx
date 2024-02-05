import axios from "axios";
import { booksCategories } from "../../assets/constance";
import BookCard from "../../components/BookCard";
import { useEffect, useState } from "react";
import { Loader } from "../BooksPage";

export default function BookSection() {
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
    <div className="md:bbg-white/90 rounded-xl p-6 my-10">
      <div className="md:flex items-center justify-between">
        <h2 className="text-2xl">Books you may like</h2>
        <div className="md:flex hidden">
          {booksCategories.map((category) => (
            <div
              className="md:ml-3 border bg-white py-1 px-3 rounded-md"
              key={category}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:mt-8 mt-5">
        {isLoading && <Loader />}
        {!isLoading &&
          books.length > 0 &&
          books.map(
            (book) =>
              book.volumeInfo.imageLinks && <BookCard book={book.volumeInfo} />
          )}
      </div>
      <button className="border border-primary px-5 py-2 rounded-md block w-max mx-auto mt-8">
        View All Books
      </button>
    </div>
  );
}
