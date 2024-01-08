import SearchBar from "../../components/SearchBar";
import BookCard from "../../components/BookCard";
import AnimatePage from "../../components/AnimatePage";

export default function Books() {
  return (
    <AnimatePage cName="px-4 mt-4">
      <SearchBar />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-4">
        {booksData.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </AnimatePage>
  );
}

const booksData = [
  {
    id: 1,
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
      extracted from Stack Overflow Documentation`,
  },
  {
    id: 2,
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
      different from their lowercase counterparts`,
  },
  {
    id: 3,
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
      extracted from Stack Overflow Documentation`,
  },
  {
    id: 4,
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
      different from their lowercase counterparts`,
  },
  {
    id: 5,
    title: "Advace JavaScript",
    image: process.env.PUBLIC_URL + "/images/js.jpeg",
    description: `It is an unofficial and free JavaScript ebook created for educational purposes. All the content is
      extracted from Stack Overflow Documentation`,
  },
  {
    id: 6,
    title: "Basic JavaScript",
    image: process.env.PUBLIC_URL + "/images/js2.jpeg",
    description: `JavaScript is a case-sensitive language. This means the language considers capital letters to be
      different from their lowercase counterparts`,
  },
];
