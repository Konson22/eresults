import { BooksDropDown } from ".";
import BookCard from "../../components/BookCard";

const booksNames = [
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
  "Primary 7",
  "Primary 8",
];

export default function PrimaryBooks() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl">Primary</h3>
        <BooksDropDown names={booksNames} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data.map((book) => (
          <BookCard image={book.image} title={book.subject} />
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
