import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function SocialMedia({ cName = "text-xl ml-4" }) {
  return (
    <div className="flex items-center justify-evenly text-xl">
      <span className={`${cName} rounded-full`}>
        <FaWhatsapp />
      </span>
      <span className={`${cName} rounded-full`}>
        <FaTwitter />
      </span>
      <span className={`${cName} rounded-full`}>
        <FaTwitter />
      </span>
      <span className={`${cName} rounded-full`}>
        <FaFacebook />
      </span>
      <span className={`${cName} rounded-full`}>
        <FaYoutube />
      </span>
    </div>
  );
}
