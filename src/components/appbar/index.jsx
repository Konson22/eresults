import { Link } from "react-router-dom";
import Icon from "../../utils/Icon";
import { FaUser } from "react-icons/fa";
import { useContextApi } from "../../manager/ContextProvider";
import { FiBarChart2, FiHome, FiSearch } from "react-icons/fi";
import MobileNavMenu from "./MobileNavMenu";
import { useState } from "react";
import { ResultCheck } from "../SearchBar";

export default function Appbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  const { profile } = useContextApi();

  return (
    <div className="bg-white shadow flex items-center justify-between md:px-[10%] px-4 py-2">
      <div className="md:h-[3rem] h-8 w-max">
        <img
          src={process.env.PUBLIC_URL + "/images/eresults-logo3.png"}
          alt=""
        />
      </div>
      <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
      <div className="md:block hidden">
        <ul className="flex">
          {links.map((link) => (
            <li className="">
              <Link className="block p-4" to={link.path}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ResultCheck cName="md:flex hidden border" />
      <div className="flex items-center">
        <Icon icon={<FiSearch />} />
        <Link to="/" className="block mx-6">
          <Icon icon={<FiHome />} />
        </Link>
        <ProfileIcon profile={profile} />
        <span className="md:hidden block ml-5" onClick={toggleMenu}>
          <Icon icon={<FiBarChart2 className="-rotate-90" />} />
        </span>
      </div>
    </div>
  );
}

function ProfileIcon({ profile }) {
  return (
    <Link className="" to={`${profile ? "/profile" : ""}`}>
      <Icon icon={<FaUser />} />
    </Link>
  );
}

const links = [
  { text: "Home", path: "/" },
  { text: "Books", path: "/online-books" },
  { text: "SSD Sylbus", path: "/ssd-sylbus" },
  { text: "Course", path: "/" },
];
