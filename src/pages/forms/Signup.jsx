import Input from "./Input";
import { useContextApi } from "../../manager/ContextProvider";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export const menuVars = {
  initial: {
    opacity: 0,
    y: -150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    y: 150,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Signup() {
  const { setShowForms } = useContextApi();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex origin-top relative md:w-[65%] w-[90%] bg-white mx-auto rounded-md"
      >
        <span
          className="bg-white p-1 rounded-full text-xl border border-gray-200 absolute -right-2 -top-2"
          onClick={() => setShowForms(null)}
        >
          <FiX />
        </span>
        <div className="flex-1 px-8 py-4">
          <div className="text-center mb-5">
            <span className="text-xl">Register</span>
          </div>
          <form>
            <Input name="name" placeholder="Name" type="text" />
            <Input name="email" placeholder="E-mail" type="email" />
            <Input name="grade" placeholder="Grade/Class" type="text" />
            <Input name="password" placeholder="Password" type="password" />
            <Input
              name="password2"
              placeholder="Comfirm Password"
              type="password"
            />
            <button className="text-white bg-green-400 py-2 w-full">
              Login
            </button>
          </form>
          <button
            className="flex items-center justify-center w-full mt-4"
            onClick={() => setShowForms("login")}
          >
            Already have an account <span className="text-blue-500">Login</span>
          </button>
        </div>
        <div className="w-[55%] md:block hidden">
          <img src="/images/kids-learning2.jpg" alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
