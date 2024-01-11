import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProfileBtn() {
  return (
    <Link className="text-2xl mx-4" to="/login">
      <FiUser />
    </Link>
  );
}
