import { FaDownload } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <div className="border bg-gray-50">
      <div className="h-[200px]">
        <img src={book.image} alt="" />
      </div>
      <div className="p-4">
        <h3 className="text-xl">{book.title}</h3>
        <p className="line-clamp-2 mb-3">{book.description}</p>
        <div className="flex">
          <button className="flex items-center border border-green-500 rounded px-2 py-1">
            <FaDownload /> Download
          </button>
        </div>
      </div>
    </div>
  );
}
