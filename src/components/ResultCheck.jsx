import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ResultCheck({ cName = "md:flex hidden" }) {
  const [indexNumber, setIndexNumber] = useState(null);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    return navigate(`/result/${indexNumber}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className={`${cName} items-center md:h-[2.7rem] h-[3.3rem]`}
    >
      <input
        className="h-full flex-1 bg-gray-100 focus:border-none border-none focus:outline-none rounded-md px-3"
        type="search"
        placeholder="Index No"
        required
        onChange={(e) => setIndexNumber(e.target.value)}
      />
      <button
        className="h-full ml-1 flex items-center justify-center md:rounded-none bg-primary rounded-md text-white md: px-4"
        type="submit"
      >
        <span className="md:block hhidden">Check</span>
        {/* <FiSearch /> */}
      </button>
    </form>
  );
}
