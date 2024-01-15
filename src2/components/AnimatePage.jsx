import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    x: "100%",
    // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
  in: {
    x: 0,
    // clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  out: {
    // x: "-100%",
    scale: 0,
    // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
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
