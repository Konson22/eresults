import { FaDownload } from "react-icons/fa";

export default function SlybusCard({
  book,
  cName = "bg-white",
  hight = "md:h-[200px] h-[180px]",
}) {
  return (
    <div
      className={`${cName} w-full rounded-md overflow-hidden border shadow-md`}
    >
      <img className={`${hight} h-[130px]`} src={book.coverImage} alt="" />
      <div className="p-3">
        <h3 className="font-bold">{book.grade}</h3>
        <span className="line-clamp-1">{book.subject}</span>
      </div>
      <div className="flex items-center justify-between bg-gray-200 px-3 py-2">
        <div className="">
          <FaDownload />
        </div>
        <div className="">20 pages</div>
      </div>
    </div>
  );
}
