import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ handleSearch, cName = "flex" }) {
  return (
    <div
      className={`${cName} md:w-[40%] w-full bg-white sshadow-md md:h-[3.1rem] h-[2.8rem] rounded-md overflow-hidden`}
    >
      <input
        className="h-full md:flex-1 w-full bg-transparent border-none focus:border-none focus:outline-none pl-5"
        type="search"
        placeholder="Subject/name"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className="h-full md:bg-green-600 md:text-white md:px-4 px-3">
        <span className="md:hidden block">
          <FiSearch />
        </span>
        <span className="md:block hidden">Search</span>
      </button>
    </div>
  );
}

export function ResultCheck({ cName = "md:flex hidden" }) {
  const [grade, setGrade] = useState(null);
  const [indexNumber, setIndexNumber] = useState(null);
  const navigate = useNavigate();
  const handleSearch = () => {
    return navigate(`/results?grade=${grade}&index=${indexNumber}`);
  };
  return (
    <div className={`${cName} md:h-[2.7rem] h-[2.8rem]`}>
      <input
        className="h-full md:flex-1 w-full bg-transparent bg-white border-gray-200 focus:border-none focus:outline-none px-3"
        type="search"
        placeholder="Index No"
        onChange={(e) => setIndexNumber(e.target.value)}
      />
      <button
        className="h-full rounded-r-md bg-green-500 text-white px-4"
        onClick={handleSearch}
      >
        Check
      </button>
    </div>
  );
}
