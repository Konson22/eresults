import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HomeBtn() {
  return (
    <Link className="text-2xl" to="/">
      <FiHome />
    </Link>
  );
}
