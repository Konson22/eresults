import { FiSearch } from "react-icons/fi";

export default function SearchBar({ handleSearch, placeholder = "Search..." }) {
  return (
    <div className="h-[3rem] bg-white text-gray-700 flex items-center rounded-full overflow-hidden mt-10">
      <input
        className="h-full flex-1 bg-transparent border-none focus:border-none focus:outline-none pl-5"
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className="h-[2.6rem] w-[2.6rem] mr-[.2rem] flex items-center justify-center rounded-full bg-green-600 text-white">
        <FiSearch />
      </button>
    </div>
  );
}
