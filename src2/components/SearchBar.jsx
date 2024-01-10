export default function SearchBar({ handleSearch }) {
  return (
    <div className="h-[2.8rem] bg-gray-50 rounded border border-green-400 overflow-hidden flex items-center">
      <input
        className="h-full w-full bg-transparent border-none focus:outline-none focus:border-none px-4"
        type="search"
        placeholder="Enter your Index No"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className="h-full bg-green-400 px-4">find</button>
    </div>
  );
}
