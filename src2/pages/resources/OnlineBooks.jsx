import { CustomNav } from "../../components/nabvar";
import AnimatePage from "../../components/AnimatePage";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar";

export default function OnlineBooks() {
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
    <AnimatePage cName="bg-white">
      <CustomNav
        title="Online Books"
        searchBar={
          <SearchBar
            handleSearch={handleSearch}
            placeholder="Search for book"
          />
        }
      />
      <div className="p-4">
        <span className="">Online Books</span>
        <div className="mt-4">
          {isLoading &&
            [...new Array(5)].map(() => (
              <div className="w-full">
                <div className="h-[120px] bg-gray-100"></div>
              </div>
            ))}
          {!isLoading &&
            books.length > 0 &&
            books.map((book) => (
              <div className="w-full bg-white shadow-md rounded overflow-hidden">
                {book.volumeInfo.imageLinks && (
                  <img
                    className="md:h-[120px]"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                )}
                <div className="p-3">
                  <h3 className="md:line-clamp-2">{book.volumeInfo.title}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </AnimatePage>
  );
}
