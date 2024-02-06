import {
  FiBook,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiVideo,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function QuickLinkSection() {
  return (
    <div className="md:hidden bg-emerald-500 shadow-md bbg-gradient-to-br to-teal-400 from-emerald-600  rounded-md mx-4 px-4 py-7 absolute left-0 right-0 top-[70%]">
      {/* <h2 className="text-xl font-bold text-white text-center">Quick Access</h2> */}
      <div className="grid grid-cols-3 gap-2 mt-">
        {data.map((item) => (
          <Link
            to={item.path}
            className={`bg-white shadow-sm rounded-md text-center py-3`}
          >
            <div
              className={`md:text-6xl text-4xl mx-auto w-max ${item.text} opacity-80`}
            >
              {item.icon}
            </div>
            <h3 className="text-sm line-clamp-1">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "Notes",
    path: "/notes",
    icon: <FiCalendar />,
    bg: "bg-amber-100",
    text: "text-amber-500",
  },
  {
    title: "Books",
    path: "/books",
    icon: <FiBookOpen />,
    bg: "bg-rose-100",
    text: "text-rose-500",
  },
  {
    title: "Sylbus",
    path: "/ssd-sylbus",
    icon: <FiBook />,
    bg: "bg-green-100",
    text: "text-green-500",
  },
  {
    title: "Quize",
    path: "/quize",
    icon: <FiFileText />,
    bg: "bg-rose-100",
    text: "text-rose-500",
  },
  {
    title: "Pass papers",
    path: "/pass-papers",
    icon: <FiFileText />,
    bg: "bg-green-100",
    text: "text-green-500",
  },
  {
    title: "Vidoes",
    path: "/ssd-sylbus",
    icon: <FiVideo />,
    bg: "bg-green-100",
    text: "text-green-500",
  },
];
