import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex items-center md:justify-center justify-evenly bg-gray-200 px-4 py-2 text-sm">
      <Link className="" to="/privacy">
        Privacy
      </Link>
      <Link className="" to="/terms-and-ondition">
        Terms & Conditions
      </Link>
      <Link className="" to="/policy">
        Policy
      </Link>
    </footer>
  );
}
