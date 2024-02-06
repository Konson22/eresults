import { useEffect, useState } from "react";
import { useContextApi } from "../manager/ContextProvider";
import { SearchBar } from "../components/SearchBar";
import SlybusCard from "../components/cards/SlybusCard";

export default function SlybusPage() {
  const [selectedgrade, setSelectedGrade] = useState("All Books");
  const [currentBooks, setcurrentBooks] = useState(null);
  const { books } = useContextApi();

  useEffect(() => {
    setcurrentBooks(books);
  }, [books]);

  useEffect(() => {
    if (selectedgrade === "All") {
      setcurrentBooks(books);
    } else {
      const results =
        books && books.filter((book) => book.section === selectedgrade);
      results.length > 0 && setcurrentBooks(results);
    }
  }, [books, selectedgrade]);

  return (
    <div className="md:px-[8%] px-4 my-7">
      <div className="flex justify-between">
        <div className="flex items-center md:justify-start justify-between flex-1">
          {booksCategories.map((grade) => (
            <div
              className="border bg-white rounded-md md:mr-2 md:px-5 px-4 py-2 h-full flex items-center"
              key={grade}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade} <span className="md:block hidden ml-1"> Books</span>
            </div>
          ))}
        </div>
        <SearchBar handleSearch={() => {}} />
      </div>
      <div className="flex mt-8">
        <h2 className="md:text-2xl font-bold">
          {selectedgrade} Books ({currentBooks && currentBooks.length})
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-3 mt-5">
        {currentBooks && currentBooks.map((book) => <SlybusCard book={book} />)}
      </div>
    </div>
  );
}

const booksCategories = ["All", "Secondary ", "Primary"];
