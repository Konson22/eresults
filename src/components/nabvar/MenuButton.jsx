import { FiBarChart2 } from "react-icons/fi";
import { useContextApi } from "../../manager/ContextProvider";

export default function MenuButton() {
  const { toggleMenu } = useContextApi();

  return (
    <div
      className="text-2xl -rotate-90 cursor-pointer text-white"
      onClick={toggleMenu}
    >
      <FiBarChart2 />
    </div>
  );
}
