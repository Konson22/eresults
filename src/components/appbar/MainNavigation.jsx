import { Link } from "react-router-dom";
import { navigationData } from "../../assets/constance";

export default function MainNavigation() {
  return (
    <div className="md:block hidden flex-1">
      <ul className="flex">
        {navigationData.map((link) => (
          <li className="">
            <Link className="uppercase block px-5" to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
