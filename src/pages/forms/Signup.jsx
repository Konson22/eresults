import { useContextApi } from "../../manager/ContextProvider";
import { FiUserPlus, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import axiosInstance from "../../hooks/useAxios";

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
  const { setShowForms, setProfile } = useContextApi();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const gradeRef = useRef();
  const sectionRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    const fields = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      grade: gradeRef.current.value,
      section: sectionRef.current.value,
      password: passwordRef.current.value,
    };

    if (
      fields.name &&
      fields.email &&
      fields.grade &&
      fields.section &&
      fields.password
    ) {
      if (fields.password === password2Ref.current.value) {
        try {
          const userCredential = await axiosInstance
            .post("/auth/register", fields)
            .then((res) => res);
          setProfile(userCredential.data);
          setShowForms(null);
        } catch (error) {
          if (error.response) {
            setMessage(error.response.data);
          } else {
            setMessage("Opps something went wrong try again");
          }
        } finally {
          setIsLoading(false);
        }
      } else {
        setMessage("password don't match");
      }
    } else {
      setMessage("Please fill all fields");
    }
  };

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
          <div className="flex justify-center items-center mb-5">
            <div className="text-4xl rounded-full bg-gray-100 p-3">
              <FiUserPlus />
            </div>
            <span className="text-xl">Register</span>
          </div>
          {message && (
            <div className="text-red-500 my-3 text-center">{message}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
                placeholder="Your Name"
                name="name"
                type="text"
                ref={nameRef}
              />
            </div>
            <div className="mb-5">
              <input
                className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
                placeholder="E-mail Address"
                name="email"
                type="email"
                ref={emailRef}
              />
            </div>
            <div className="md:grid grid-cols-2 gap-x-3 mb-5">
              <input
                className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
                placeholder="Your Grade/Class"
                name="grade"
                type="text"
                ref={gradeRef}
              />
              <input
                className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
                placeholder="Section"
                name="section"
                type="text"
                ref={sectionRef}
              />
            </div>
            <div className="md:grid grid-cols-2 gap-x-3 mb-5">
              <input
                className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
                placeholder="Creat password"
                name="password"
                type="password"
                ref={passwordRef}
              />
              <input
                className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
                placeholder="Repeate password"
                name="password2"
                type="password"
                ref={password2Ref}
              />
            </div>
            <button
              className="text-white bg-green-400 py-2 w-full"
              type="submit"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
          <button
            className="flex items-center justify-center w-full mt-4"
            onClick={() => setShowForms("login")}
          >
            Already have an account{" "}
            <span className="text-blue-500 ml-1">Login</span>
          </button>
        </div>
        <div className="w-[40%] md:block hidden">
          <img src="/images/kids-learning2.jpg" alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
