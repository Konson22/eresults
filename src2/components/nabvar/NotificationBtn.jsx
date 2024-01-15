import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NotificationBtn({ cName = "" }) {
  return (
    <Link className={`${cName} text-2xl`} to="/">
      <FiBell />
    </Link>
  );
}
