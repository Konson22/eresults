import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="md:h-[5rem] h-[4rem] block w-max" to="/">
      <img src={process.env.PUBLIC_URL + "/images/logo-image.jpeg"} alt="" />
    </Link>
  );
}
