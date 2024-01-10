import { FiSearch, FiUser } from "react-icons/fi";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { useContextApi } from "../../manager/ContextProvider";

export default function Navbar() {
  const { toggleMenu, setShowForms } = useContextApi();

  return (
    <nav className="flex justify-between items-center z-30">
      <Logo />
      <div className="flex items-center text-white">
        <span className="text-2xl">
          <FiSearch />
        </span>
        <div className="text-2xl mx-4" onClick={() => setShowForms("login")}>
          <FiUser />
        </div>
        <MenuButton toggleMenu={toggleMenu} />
      </div>
      {/* <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} /> */}
    </nav>
  );
}
