import { FiSearch } from "react-icons/fi";

export function SearchBar({ handleSearch, cName = "md:flex hidden" }) {
  return (
    <div
      className={`${cName} flex-1 md:ml-5 ml-1 items-center md:h-[3.2rem] h-[3.3rem] rounded-md overflow-hidden bg-white`}
    >
      <input
        className="h-full flex-1 focus:border-none border-none focus:outline-none px-3"
        type="search"
        placeholder="Search for book"
        onChange={(e) => handleSearch(e.target.value)}
        required
      />
      <button
        className="h-full flex items-center justify-center md:bg-primary md:text-white text-primary px-4"
        type="submit"
      >
        <FiSearch className="md:text-xl text-2xl " />
        <span className="md:block hidden ml-2">Find</span>
      </button>
    </div>
  );
}
