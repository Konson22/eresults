import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className={`md:flex hidden items-center`}>
      <span className="md:text-xl text-xl md:p-2 md:border border-green-600 text-green-600 rounded md:ml-3">
        <FaFacebook />
      </span>
      <span className="md:text-xl text-xl md:p-2 md:border border-green-600 text-green-600 rounded md:ml-3">
        <FaTwitter />
      </span>
      <span className="md:text-xl text-xl md:p-2 md:border border-green-600 text-green-600 rounded md:ml-3">
        <FaWhatsapp />
      </span>
      <span className="md:text-xl text-xl md:p-2 md:border border-green-600 text-green-600 rounded md:ml-3">
        <FaYoutube />
      </span>
    </div>
  );
}
