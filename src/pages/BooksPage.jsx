import { useEffect, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import BookCard from "../components/BookCard";
import axios from "axios";

export default function BooksPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("physics");

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
    <div className="md:px-[8%] px-4 mt-5">
      <div className="flex justify-between">
        <div
          className="md:hidden flex items-center cursor-pointer bg-white px-2 rounded-md relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter <FiChevronDown />
          {isOpen && (
            <div className="w-[200px] rounded-md absolute left-0 top-full bg-white shadow border py-2">
              {booksCategories.map((category) => (
                <div
                  className="px-5 py-1"
                  key={category}
                  onClick={() => setQuery(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="md:flex items-center hidden md:mt-0 mt-5">
          {booksCategories.map((category) => (
            <div
              className="border bg-white rounded-md md:mr-2 px-5 h-full flex items-center"
              key={category}
              onClick={() => setQuery(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex flex-1 md:ml-5 ml-1 items-center md:h-[3.2rem] h-[3.3rem] rounded-md overflow-hidden bg-gray-100">
          <input
            className="h-full flex-1 focus:border-none bg-transparent border-none focus:outline-none px-3"
            type="search"
            placeholder="Search for book"
            onChange={(e) => handleSearch(e.target.value)}
            required
          />
          <button
            className="h-full flex items-center justify-center md:bg-primary md:text-white text-primary px-4"
            type="submit"
          >
            <FiSearch className="md:text-xl text-2xl " />
            <span className="md:block hidden ml-2">Find</span>
          </button>
        </div>
      </div>
      <div className="flex mt-8">
        <h2 className="md:text-2xl font-bold">
          {query} - ({books.length})
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-3 mt-5">
        {isLoading && <Loader />}
        {!isLoading &&
          books.length > 0 &&
          books.map(
            (book) =>
              book.volumeInfo.imageLinks && <BookCard book={book.volumeInfo} />
          )}
      </div>
    </div>
  );
}

export function Loader() {
  return (
    <>
      {[...new Array(8)].map(() => (
        <div className="border bg-white w-full">
          <div className="h-[200px] bg-gray-200"></div>
          <div className="md:px-4 p-2 md:py-3">
            <p className="h-3 w-full bg-gray-100 mb-1"></p>
            <p className="h-2 w-[60%] bg-gray-100"></p>
            <div className="flex items-center justify-between mt-4">
              <span className="h-5 w-14 bg-gray-300"></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const booksCategories = [
  "All Books",
  "Science",
  "Technology",
  "History",
  "Economic",
  "Business",
];
