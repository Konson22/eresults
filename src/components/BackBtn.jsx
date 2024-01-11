import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BackBtn() {
  return (
    <Link className="mt-2 text-xl mr-4" to={-1}>
      <FiArrowLeft />
    </Link>
  );
}
