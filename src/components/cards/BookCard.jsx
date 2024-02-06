export default function BookCard({
  book,
  cName = "bg-white",
  hight = "md:h-[200px] h-[180px]",
}) {
  return (
    <div className="border bg-white">
      <img
        className={`${cName} h-[130px]`}
        src={book.imageLinks.thumbnail}
        alt=""
      />
      <div className="md:px-4 p-2 md:py-3">
        <p className="md:text-xl line-clamp-1">{book.title}</p>
        <p className="line-clamp-3">{book.description}</p>
        <div className="flex items-center justify-between mt-4">
          <a
            className="md:px-4 md:py-1 rounded md:bg-green-400 md:text-white text-green-400"
            href={book.previewLink}
            target="_blank"
            rel="noreferrer"
          >
            <span className="md:block hidden">view</span>
          </a>
          <span className="text-sm">{book.pageCount} Pages</span>
        </div>
      </div>
    </div>
  );
}
