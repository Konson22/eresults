import { FiBell, FiBookOpen, FiHome, FiUpload, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function Navbar() {
  return (
    <div>
      <MainNavigation />
      <MobileNavbar />
    </div>
  );
}

export function MobileNavbar() {
  return (
    <div className="md:hidden flex items-center justify-between fixed bottom-0 left-0 right-0 h-[3.5rem] bg-gray-100 text-green-600 px-5">
      <Link className="text-2xl" to="/">
        <FiHome />
      </Link>
      <Link className="text-2xl" to="/learning-materials">
        <FiBookOpen />
      </Link>
      <Link className="text-2xl border-4 border-white bg-green-600 text-white rounded-full p-3 -mt-5">
        <FiUpload />
      </Link>
      <Link className="text-2xl" to="/friends">
        <FiUsers />
      </Link>
      <Link className="text-2xl" to="/">
        <FiBell />
      </Link>
    </div>
  );
}
