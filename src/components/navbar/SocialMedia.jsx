import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { scaleInVariants } from "../../assets/variants";
import { useState } from "react";

export default function SocialMedia() {
  const [isOpen, setIsOpen] = useState(false);
  const mediLinks = (cName = "md:flex hidden") => (
    <div className={`${cName} items-center`}>
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

  return (
    <div className="">
      {mediLinks()}
      <div
        className="md:hidden flex border border-green-500 px-3 py-1 text-green-500 text-sm rounded relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        Follow
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              variants={scaleInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="origin-top absolute left-0 top-[103%] w-36 bg-gray-100 p-4 rounded-md"
            >
              {mediLinks("md:hidden flex justify-between")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
