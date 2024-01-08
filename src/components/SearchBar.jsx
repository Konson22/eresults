export default function SearchBar() {
  return (
    <div className="h-[2.8rem] bg-gray-50 rounded overflow-hidden flex items-center">
      <input
        className="h-full w-full bg-transparent border-none focus:outline-none focus:border-none px-4"
        type="search"
        placeholder="Enter your Index No"
      />
      <button className="h-full bg-green-500 px-4">find</button>
    </div>
  );
}
