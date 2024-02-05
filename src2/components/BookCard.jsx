import { FaDownload } from "react-icons/fa";

export default function BookCard({
  image,
  title,
  pageCount = "",
  cName = "md:h-[200px]",
}) {
  return (
    <div className="border shadow">
      <img className={`${cName} h-[130px]`} src={image} alt="" />
      <div className="md:px-4 p-2 md:py-3">
        <p className="md:text-xl line-clamp-1">{title}</p>
        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center md:px-4 md:py-1 rounded md:bg-green-400 md:text-white text-green-400">
            <FaDownload className="mr-2" />
            <span className="md:block hidden">Download</span>
          </button>
          <span className="text-sm">{pageCount} Pages</span>
        </div>
      </div>
    </div>
  );
}
