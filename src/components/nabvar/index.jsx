import { FiSearch } from "react-icons/fi";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import ProfileBtn from "./ProfileBtn";
import BackBtn from "../BackBtn";
import HomeBtn from "./HomeBtn";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center z-30">
      <Logo />
      <div className="flex items-center text-white">
        <span className="text-2xl">
          <FiSearch />
        </span>
        <ProfileBtn />
        <MenuButton />
      </div>
    </nav>
  );
}

export function CustomNav({ title, cName = "pb-16", searchBar = null }) {
  return (
    <div
      className={`${cName} px-4 pt-2 text-white`}
      style={{
        backgroundImage: `linear-gradient(rgba(7, 130, 179, 0.8), rgba(7, 130, 179, 0.8)), url(${
          process.env.PUBLIC_URL + "/images/kids-learning.jpg"
        })`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BackBtn />
          <h3 className="text-xl">{title}</h3>
        </div>
        <div className="flex items-center">
          <HomeBtn />
          <ProfileBtn />
          <MenuButton />
        </div>
      </div>
      {searchBar && searchBar}
    </div>
  );
}
