import { ResultCheck } from "../../components/SearchBar";
import { FiBookOpen, FiFileText } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative md:mb-0 pb-16">
      <header
        className="md:h-[80vh] flex items-center md:px-[10%] px-4 md:pt-0 pt-16 md:pb-0 pb-24 clip"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 130, 179, 0.5), rgba(7, 130, 179, 0.5)), url(${
            process.env.PUBLIC_URL + "/images/kids-learning.jpg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <div className="md:w-[60%]">
          <h1 className="md:text-7xl text-white text-2xl text-center mb-4">
            Your gateway to success
          </h1>
          <ResultCheck cName="md:hidden flex" />
        </div>
      </header>
      <div className="md:hidden grid md:grid-cols-3 grid-cols-3 gap-2 px-3 absolute inset-0 top-[80%]">
        {data.map((item) => (
          <Link
            to={item.path}
            className={`${item.bg} shadow-sm rounded-md text-center px-2 py-5`}
          >
            <div className={`md:text-6xl text-4xl mx-auto w-max ${item.text}`}>
              {item.icon}
            </div>
            <h3 className="text-sm">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
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
    path: "/ssd-sylbus",
    icon: <FiBookOpen />,
    bg: "bg-green-100",
    text: "text-green-500",
  },
];
