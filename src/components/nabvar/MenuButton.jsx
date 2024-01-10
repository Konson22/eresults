import { FiBarChart2 } from "react-icons/fi";

export default function MenuButton({ toggleMenu }) {
  return (
    <div
      className="text-2xl -rotate-90 cursor-pointer text-white"
      onClick={toggleMenu}
    >
      <FiBarChart2 />
    </div>
  );
}
