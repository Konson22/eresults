import { FiBarChart2, FiBell, FiMail } from "react-icons/fi";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";
import { useContextApi } from "../../manager/ContextProvider";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import SocialMedia from "../SocialMedia";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  const { profile, setShowForms } = useContextApi();
  return (
    <>
      <div className="md:block hidden bg-primary text-white px-[5%] py-3">
        <div className="flex items-center justify-between">
          <p>this is some random text</p>
          <SocialMedia />
        </div>
      </div>
      <div className="bg-white flex items-center justify-between px-[5%] border-b-4 border-primary sticky inset-0 z-40">
        <div className="">
          <Logo />
        </div>
        <MainNavigation />
        <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        <div className="flex items-center">
          {/* <button className="border border-primary px-4 py-1 rounded-md">
            Check Results
          </button> */}
          <ProfileIcon profile={profile} setShowForms={setShowForms} />
          <div className="md:hidden block ml-5" onClick={toggleMenu}>
            <FiBarChart2 className="text-2xl -rotate-90" />
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileIcon({ profile, setShowForms }) {
  return !profile ? (
    <div className="flex items-center">
      <span className="text-2xl">
        <FiMail />
      </span>
      <span className="text-2xl md:mx-4 mx-4">
        <FiBell />
      </span>
      <Link className="flex items-center" to="/profile">
        <img
          className="md:h-10 md:w-10 h-8 w-8 rounded-full md:mr-2"
          src="./avatars/image-2.png"
          alt=""
        />
        <span className="md:block hidden">Konson</span>
      </Link>
    </div>
  ) : (
    <div className="flex">
      <button
        className="border-primary px-3 py-1"
        onClick={() => setShowForms("login")}
      >
        login
      </button>
      <button
        className="md:block hidden border-primary px-3 py-1"
        onClick={() => setShowForms("signup")}
      >
        Sign up
      </button>
    </div>
  );
}
