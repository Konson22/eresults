export default function BookCard({ image, title, subject = "" }) {
  return (
    <div className="border bg-gray-50">
      <img className="md:h-[200px] h-[150px]" src={image} alt="" />
      <div className="p-3">
        <h3 className="text-xl">{subject}</h3>
        <p className="line-clamp-1">{title}</p>
        <button className="px-4 py-1 rounded mt-4 bg-green-400 text-white">
          Download
        </button>
      </div>
    </div>
  );
}
