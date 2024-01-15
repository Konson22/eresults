import { FiBookOpen, FiFileText } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/nabvar";
import { useState } from "react";

export default function Header() {
  const [grade, setGrade] = useState(null);
  const [indexNumber, setIndexNumber] = useState(null);
  const navigate = useNavigate();
  const handleSearch = () => {
    return navigate(`/results?grade=${grade}&index=${indexNumber}`);
  };

  return (
    <header className="mb-14">
      <div className="relative">
        <div
          className="md:px-[10%] px-4 pt-5 md:pb- pb-24 clip text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(7, 130, 179, 0.8), rgba(7, 130, 179, 0.8)), url(${
              process.env.PUBLIC_URL + "/images/kids-learning.jpg"
            })`,
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <div className="md:w-[50%] mx-auto">
            <h1 className="md:text-5xl text-2xl my-3 text-center mt-10">
              Your gateway to success
            </h1>
            <div className="md:bg-black/50 bg-white/40 md:p-5 p-3 rounded-md md:mt-8 mt-4">
              <h2 className="md:text-2xl  mb-3">Check your results</h2>
              <div className="flex md:h-[3.5rem] h-[2.8rem]">
                <select
                  className="h-full border-none focus:border-none focus:outline-none bg-white text-gray-600 flex items-center rounded-md md:mr-3 mr-2"
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="">Grade</option>
                  <option value="S4">S4</option>
                  <option value="P8">P8</option>
                  <option value="Senior four">S4</option>
                </select>
                <div className="h-full md:flex-1 w-full bg-white text-gray-700 flex items-center rounded-md overflow-hidden">
                  <input
                    className="h-full md:flex-1 w-full bg-transparent border-none focus:border-none focus:outline-none pl-5"
                    type="search"
                    placeholder="Index No"
                    onChange={(e) => setIndexNumber(e.target.value)}
                  />
                  <button
                    className="h-full bg-green-600 text-white px-4"
                    onClick={handleSearch}
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden grid md:grid-cols-3 grid-cols-3 gap-2 px-3 absolute inset-0 top-[80%]">
          {data.map((item) => (
            <Link
              to={item.path}
              className={`${item.bg} shadow-sm rounded-md text-center px-2 py-5`}
            >
              <div
                className={`md:text-6xl text-4xl mx-auto w-max ${item.text}`}
              >
                {item.icon}
              </div>
              <h3 className="text-sm">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

const data = [
  {
    title: "My Files",
    path: "/files",
    icon: <FaBriefcase />,
    bg: "bg-amber-100",
    text: "text-amber-500",
  },
  {
    title: "Books",
    path: "/online-books",
    icon: <FiFileText />,
    bg: "bg-rose-100",
    text: "text-rose-500",
  },
  {
    title: "Sylbus",
    path: "/sylbus",
    icon: <FiBookOpen />,
    bg: "bg-green-100",
    text: "text-green-500",
  },
];
