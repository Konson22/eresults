import { FaDownload } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <div className="border bg-gray-50">
      <div className="md:h-[200px] min-h-[200px] bg-gray-200">
        {book.volumeInfo.imageLinks && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl md:line-clamp-2">{book.volumeInfo.title}</h3>
        {/* <p className="line-clamp-2 mb-3">{book.volumeInfo.subtitle}</p> */}
        <div className="flex mt-3">
          <a
            href={book.accessInfo.pdf.acsTokenLink}
            className="flex items-center border border-green-500 rounded px-2 py-1"
          >
            <FaDownload /> Download
          </a>
        </div>
      </div>
    </div>
  );
}
