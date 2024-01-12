import { FiBookOpen, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import Navbar from "../../components/nabvar";
import SearchBar from "../../components/SearchBar";

export default function Header() {
  const handleSearch = (e) => {
    console.log(e);
  };

  return (
    <header className="mb-14">
      <div className="relative">
        <div
          className="px-4 pt-5 pb-24 clip text-white "
          style={{
            backgroundImage: `linear-gradient(rgba(7, 130, 179, 0.8), rgba(7, 130, 179, 0.8)), url(${
              process.env.PUBLIC_URL + "/images/kids-learning.jpg"
            })`,
            backgroundSize: "cover",
          }}
        >
          <Navbar />
          <h1 className="text-2xl my-3 text-center mt-10">
            Your gateway to success
          </h1>
          {/* <h1 className="text-2xl my-3">Learn anytime and anywhere</h1> */}
          {/* <h1 className="text-2xl my-3">Discover a new world of learning.</h1> */}
          {/* <h1 className="text-2xl my-3">Learn from anywhere, anytime.</h1> */}
          <SearchBar
            handleSearch={handleSearch}
            placeholder="Search for book"
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-3 gap-2 px-3 absolute inset-0 top-[80%]">
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
