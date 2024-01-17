import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";

export default function SylbusPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All Books");

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axiosInstance("/books").then((res) => res);
        if (isMuted) {
          setBooks(results.data);
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
  }, []);

  return (
    <div className="md:px-[8%] px-3 py-4">
      <div className="md:flex items-center justify-between">
        <ul className="flex items-center justify-between">
          {categories.map((category) => (
            <li
              className={`flex items-center md:mr-4 cursor-pointer border md:h-[3.1rem] rounded py-1 md:px-4 px-3 ${
                currentCategory === category
                  ? "text-gray-800 bg-green-200"
                  : "text-gray-400 bg-white"
              }`}
              key={category}
              onClick={() => setCurrentCategory(category)}
            >
              <span className="md:inline-block hidden">{category} </span>{" "}
              <span className="md:hidden block"> {category.split(" ")[0]}</span>
            </li>
          ))}
        </ul>
        <SearchBar cName="md:flex hidden" />
      </div>
      <div className="md:mt-10 mt-4">
        <h3 className="text-xl">{currentCategory}</h3>
        {message && <h3 className="text-red-500">{message}</h3>}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:mt-10 mt-4">
          {isLoading &&
            [...new Array(5)].map(() => (
              <div className="w-full">
                <div className="md:h-[160px] h-[150px] bg-gray-100"></div>
              </div>
            ))}
          {!isLoading &&
            books.length > 0 &&
            books.map((book) => (
              <BookCard
                image={process.env.REACT_APP_API + `/${book.coverImage}`}
                subject={book.grade}
                title={book.subject}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  "All Books",
  "Primary Books",
  "Secondary Books",
  "Exams Papers",
];
