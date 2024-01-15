import { Link } from "react-router-dom";

export default function NavigationLink() {
  return (
    <div className="md:block hidden">
      <ul className="flex">
        {links.map((link) => (
          <li className="">
            <Link className="block p-4" to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const links = [
  { text: "Home", path: "/" },
  { text: "Books", path: "/online-books" },
  { text: "SSD Sylbus", path: "/sylbus" },
  { text: "Course", path: "/" },
];
