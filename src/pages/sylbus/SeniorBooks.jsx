import { BooksDropDown } from ".";
import BookCard from "../../components/BookCard";

const booksNames = ["Senior one", "Senior two", "Senior three", "Senior four"];

export default function SeniorBooks() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl">Secondary</h3>
        <BooksDropDown names={booksNames} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
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
