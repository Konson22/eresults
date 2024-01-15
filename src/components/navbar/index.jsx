import Icon from "../../utils/Icon";
import Logo from "./Logo";
import { FiBarChart2, FiHome, FiUser } from "react-icons/fi";
import NavigationLink from "./NavigationLink";
import { ResultCheck } from "../SearchBar";
import { Link } from "react-router-dom";
import MobileNavMenu from "./MobileNavMenu";
import { useState } from "react";
import { useContextApi } from "../../manager/ContextProvider";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  const { profile } = useContextApi();

  return (
    <nav className="bg-gray-50 flex items-center justify-between md:px-[5%] px-4 py-3">
      <Logo />
      <NavigationLink />
      <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
      <ResultCheck />
      <div className="flex items-center text-green-400">
        <HomeBtn />
        <ProfileIcon profile={profile} />
        <MenuBtn toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}

function ProfileIcon({ profile }) {
  return (
    <>
      {profile ? (
        <Link className="flex mx-4" to="/profile">
          <img className="h-8 w-8 rounded-full" src={profile.avatar} alt="" />
        </Link>
      ) : (
        <Link className="text-2xl mx-4" to="/login">
          <FiUser />
        </Link>
      )}
    </>
  );
}

function HomeBtn() {
  return (
    <Link className="md:hidden block" to="/">
      <Icon icon={<FiHome />} />
    </Link>
  );
}

function MenuBtn({ toggleMenu }) {
  return (
    <div className="-rotate-90 md:hidden block" onClick={toggleMenu}>
      <Icon icon={<FiBarChart2 />} />
    </div>
  );
}
