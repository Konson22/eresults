import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    // opacity: 0,
    // x: "100%",
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  },
  in: {
    // opacity: 1,
    // x: 0,
    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  out: {
    // opacity: 0,
    // x: "-100%",
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};

export default function AnimatePage({ children, cName = "" }) {
  return (
    <motion.div
      className={cName}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
