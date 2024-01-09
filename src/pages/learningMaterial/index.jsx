import { FaUser } from "react-icons/fa";
import { FiFileText, FiVideo } from "react-icons/fi";
import { Heading2 } from "../../util/Headings";
import { Link } from "react-router-dom";
import PaperCard from "../../components/PaperCard";
import AnimatePage from "../../components/AnimatePage";

export default function LearningMaterialPage() {
  return (
    <AnimatePage cName="md:px-[10%] px-4 my-4">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {data.map((item) => (
          <Link
            to={item.path}
            className="bg-gray-100 flex items-center rounded-md text-center p-3"
          >
            <div
              className={`md:text-6xl text-2xl mr-2 rounded-full p-2 ${item.bg} text-white`}
            >
              {item.icon}
            </div>
            <h3 className="text-sm">{item.title}</h3>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Heading2 text="Recently Shred" />
        <div className="mt-3">
          <PaperCard files={materials} />
        </div>
      </div>
    </AnimatePage>
  );
}

const data = [
  {
    title: "My Files",
    path: "/my-files",
    icon: <FiFileText />,
    bg: "bg-red-400",
  },
  {
    title: "Pass papers",
    path: "/pass-papers",
    icon: <FaUser />,
    bg: "bg-blue-400",
  },
  {
    title: "Books",
    path: "/books",
    icon: <FaUser />,
    bg: "bg-green-400",
  },
  {
    title: "Vidoes",
    path: "/pass-papers",
    icon: <FiVideo />,
    bg: "/vidoes",
  },
];

const materials = [
  {
    title: "Advace JavaScript",
    subject: "Programming",
  },
  {
    title: "Basic Math",
    subject: "Math",
  },
  {
    title: "Christian Religion",
    subject: "CRE",
  },
  {
    title: "History of South Sudan",
    subject: "History",
  },
];
