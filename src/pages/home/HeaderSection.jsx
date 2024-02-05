import { FiSearch } from "react-icons/fi";
import QuickLinkSection from "./QuickLinkSection";
import { ResultCheck } from "../../components/ResultCheck";

export default function HeaderSection() {
  const handleSearch = (e) => {};
  return (
    <header className="relative md:mb-0 mb-48">
      <div className="header md:h-[75vh] flex items-center md:px-[10%] px-7 py-24 -z-10">
        <div className="md:w-[70%] w-full pb-24">
          <h1 className="md:text-6xl text-white text-2xl md:text-left text-center md:mb-8 mb-4">
            Your gateway to success
          </h1>
          <ResultCheck cName="md:hidden flex" />
          <div className="md:flex hidden w-full sshadow-md md:h-[4rem] h-[2.8rem]">
            <input
              className="h-full md:flex-1 w-full bg-white border-none rounded-md focus:border-none focus:outline-none pl-5"
              type="search"
              placeholder="Subject/name"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="h-full bg-primary text-white md:px-4 px-5 ml-1 rounded-md">
              <span className="md:hidden block">
                <FiSearch />
              </span>
              <span className="md:block hidden">Search</span>
            </button>
          </div>
        </div>
      </div>
      <QuickLinkSection />
    </header>
  );
}
