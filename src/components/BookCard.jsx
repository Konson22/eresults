export default function BookCard({ image, title }) {
  return (
    <div className="border bg-gray-50">
      <img className="md:h-[200px] h-[150px]" src={image} alt="" />
      <div className="p-3">
        <p>{title}</p>
      </div>
    </div>
  );
}
