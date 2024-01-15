import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HomeBtn({ cName = "" }) {
  return (
    <Link className={`${cName} text-2xl`} to="/">
      <FiHome />
    </Link>
  );
}
