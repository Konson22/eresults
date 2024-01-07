import SocialMedia from "./SocialMedia";
import { FiBarChart2, FiChevronDown, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navigationLinksData } from "../../assets/data";
import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import { useContextApi } from "../../manager/ContextProvider";

export default function MainNavigation() {
  const { setShowForms } = useContextApi();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <>
      <div className="flex items-center justify-between md:px-[8%] px-4 md:py-5 py-3 shadow-md">
        <div className="md:h-16 h-9 mr-2">
          <img
            src={process.env.PUBLIC_URL + "/images/eresults-logo3.png"}
            alt=""
          />
        </div>
        <SocialMedia />
        <div className="md:hidden flex items-center text-green-600 text-2xl">
          <span className="">
            <FiSearch />
          </span>
          <span className="mx-4" onClick={() => setShowForms("login")}>
            <FiUser />
          </span>
          <span className="-rotate-90 relative" onClick={toggleMenu}>
            <FiBarChart2 />
          </span>
        </div>
      </div>
      <div className="bg-green-600 text-white px-[8%]">
        <ul className="md:flex hidden">
          {navigationLinksData.map((link) =>
            link.subLinks ? <SubLink link={link} /> : <NavLink link={link} />
          )}
        </ul>
      </div>
      <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </>
  );
}

function SubLink({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVars = {
    initial: {
      opacity: 0,
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <li
      className="cursor-pointer relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center px-4 py-5">
        {link.title}
        <FiChevronDown className="ml-2" />
      </div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-full origin-top left-0 z-40 bg-white text-gray-600 w-[300px] py-1"
          >
            {link.subLinks.map((link, index) => (
              <NavLink
                link={link}
                cName="px-4 py-2  hover:bg-sky-800/70 hover:text-white"
                key={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </li>
  );
}

function NavLink({ link, cName = "px-4 py-5" }) {
  return (
    <li className="">
      <Link className={`block ${cName}`} to={link.path}>
        {link.title}
      </Link>
    </li>
  );
}
