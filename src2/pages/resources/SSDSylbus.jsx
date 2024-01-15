import { useState } from "react";
import { CustomNav } from "../../components/nabvar";
import AnimatePage from "../../components/AnimatePage";
import SearchBar from "../../components/SearchBar";

export default function SSDSylbus() {
  const [currentCard, setCurrentCard] = useState("primary");

  const handleSearch = (e) => {
    console.log(e);
  };

  return (
    <AnimatePage>
      <CustomNav
        title="SSD Sylbus"
        searchBar={
          <SearchBar
            handleSearch={handleSearch}
            placeholder="Search for book"
          />
        }
      />
      <div className="bg-white">
        <div className="flex justify-between text-left">
          <span
            className={`${
              currentCard === "primary" ? "border-b-green-400" : "text-gray-400"
            } border-b-2 flex-1 px-4 py-2`}
            onClick={() => setCurrentCard("primary")}
          >
            Primary
          </span>
          <span
            className={`${
              currentCard === "secondary"
                ? "border-b-green-400"
                : "text-gray-400"
            } border-b-2 flex-1 px-4 py-2`}
            onClick={() => setCurrentCard("secondary")}
          >
            Secondary
          </span>
        </div>
        {currentCard === "primary" && <PrimaryBooks />}
        {currentCard === "secondary" && <SecondaryBooks />}
      </div>
    </AnimatePage>
  );
}

function PrimaryBooks() {
  const booksNames = [
    "Primary one",
    "Primary two",
    "Primary three",
    "Primary four",
    "Primary five",
    "Primary six",
    "Primary seven",
    "Primary eight",
  ];
  return (
    <AnimatePage cName="px-4 py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl flex-1">Primary Books</h2>
        <BooksDropDown names={booksNames} />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((book) => (
          <div className="border">
            <img className="h-[100px]" src={book.image} alt="" />
            <div className="p-3">
              <h3 className="">{book.subject}</h3>
              <span className="text-sm">{book.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </AnimatePage>
  );
}

function SecondaryBooks() {
  const booksNames = [
    "Senior one",
    "Senior two",
    "Senior three",
    "Senior four",
  ];
  return (
    <AnimatePage cName="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl flex-1">Secondary Books</h2>
        <BooksDropDown names={booksNames} />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((book) => (
          <div className="border">
            <img className="h-[100px]" src={book.image} alt="" />
            <div className="p-3">
              <h3 className="">{book.subject}</h3>
              <span className="text-sm">{book.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </AnimatePage>
  );
}

function BooksDropDown({ names }) {
  return (
    <select className="x-3 py-1 rounded-md border">
      <option value="All books">All books</option>
      {names.map((grade) => (
        <option value="All books">{grade}</option>
      ))}
    </select>
  );
}

const data = [
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
];
