import {
  FiBarChart2,
  FiBell,
  FiChevronDown,
  FiMail,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";
import { useContextApi } from "../../manager/ContextProvider";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import SocialMedia from "../SocialMedia";
import { FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  const { profile, setShowForms, signOutUser } = useContextApi();
  return (
    <>
      <div className="md:block hidden bg-primary text-white md:px-[5%] py-3">
        <div className="flex items-center justify-between">
          <p>this is some random text</p>
          <SocialMedia />
        </div>
      </div>
      <div className="bg-white flex items-center justify-between md:px-[5%] px-3 border-b-4 border-primary sticky inset-0 z-40">
        <div className="md:hidden block mr-3" onClick={toggleMenu}>
          <FiBarChart2 className="text-2xl rotate-90" />
        </div>
        <Logo />
        <MainNavigation />
        <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        <ProfileIcon
          signOutUser={signOutUser}
          profile={profile}
          setShowForms={setShowForms}
        />
      </div>
    </>
  );
}

function ProfileIcon({ profile, setShowForms, signOutUser }) {
  const [isOPen, setIsOpen] = useState(false);

  return profile ? (
    <div className="flex items-center">
      <span className="text-xl">
        <FiMail />
      </span>
      <span className="text-xl md:mx-4 mx-3">
        <FiBell />
      </span>
      <div
        className="flex items-center relative"
        onClick={() => setIsOpen(!isOPen)}
      >
        <img
          className="md:h-10 md:w-10 h-8 w-8 rounded-full"
          src={profile.avatar}
          alt=""
        />
        <span className="md:block hidden mx-2">{profile.name}</span>
        <FiChevronDown className="md:block hidden" />
        <motion.div
          variants={menuVars}
          initial="initial"
          animate={isOPen ? "animate" : "exit"}
          // exit="exit"
          className="absolute origin-top right-0 top-full bg-gray-100 rounded-md border w-[180px] py-3"
        >
          <Link
            className="flex items-center hover:bg-primary/50 px-4 py-2"
            to="/profile"
          >
            <FiUser className="text-xl mr-2" />
            Profile
          </Link>
          <Link
            className="flex items-center hover:bg-primary/50 px-4 py-2"
            to="/profile"
          >
            <FiSettings className="text-xl mr-2" />
            Settings
          </Link>
          <Link
            className="flex items-center hover:bg-primary/50 px-4 py-2"
            to="/profile"
          >
            <FiUser className="text-xl mr-2" />
            Profile
          </Link>
          <span
            className="flex items-center hover:bg-primary/50 px-4 py-2"
            onClick={signOutUser}
          >
            <FaSignOutAlt className="text-xl mr-2" />
            Sign out
          </span>
        </motion.div>
      </div>
    </div>
  ) : (
    <div className="flex flex-1 justify-end">
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

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      // ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.2,
    },
  },
};
