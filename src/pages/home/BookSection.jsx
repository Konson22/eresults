import { booksCategories } from "../../assets/constance";
import BookCard from "../../components/cards/BookCard";
import { useContextApi } from "../../manager/ContextProvider";

export default function BookSection() {
  const { books } = useContextApi();

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
        {books.length > 0 && books.map((book) => <BookCard book={book} />)}
      </div>
      <button className="border border-primary px-5 py-2 rounded-md block w-max mx-auto mt-8">
        View All Books
      </button>
    </div>
  );
}
