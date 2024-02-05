import { FaDownload } from "react-icons/fa";

export default function BookCard({
  book,
  cName = "bg-white",
  hight = "md:h-[200px] h-[180px]",
}) {
  return (
    <div
      className={`${cName} w-full md:block flex md:rounded-md overflow-hidden border md:shadow-md`}
    >
      <img
        className={`${hight} md:w-full w-[120px]`}
        src={book.coverImage}
        alt=""
      />
      <div className="flex-1 flex flex-col">
        <div className="p-3 flex-1">
          <h3 className="font-bold">{book.grade}</h3>
          <span className="line-clamp-3">
            This is some demo text about this books
          </span>
        </div>
        <div className="flex items-center justify-between md:bg-gray-100 px-3 py-2">
          <div className="">20 pages</div>
          <div className="">
            <FaDownload />
          </div>
        </div>
      </div>
    </div>
  );
}
