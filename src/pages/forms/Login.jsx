import { FaFacebook, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config";
import { useContextApi } from "../../manager/ContextProvider";
import { useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { menuVars } from "./Signup";
import axiosInstance from "../../hooks/useAxios";

export default function Login() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setShowForms, setProfile } = useContextApi();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    const fields = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (fields.email && fields.password) {
      try {
        const userCredential = await axiosInstance
          .post("/auth/login", fields)
          .then((res) => res);
        setProfile(userCredential.data);
        setShowForms(null);
        console.log(userCredential.data);
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
      setMessage("Please fill all fields");
    }
  };

  const GoogleAuthHandler = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(
      (credential) => {
        const user = {
          name: credential.user.displayName,
          email: credential.user.email,
          userID: credential.user.uid,
          avatar: credential.user.photoURL,
        };
        setProfile(user);
      },
      (err) => {
        console.dir(err);
        setMessage(err?.code?.split("/")[1]);
      }
    );
  };

  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex relative md:w-[65%] w-[90%] bg-white mx-auto"
    >
      <span
        className="bg-white p-1 rounded-full text-xl border border-gray-200 absolute -right-2 -top-2"
        onClick={() => setShowForms(null)}
      >
        <FiX />
      </span>
      <div className="flex-1 p-8">
        <h3 className="text-center text-xl mb-5">Login</h3>
        {message && (
          <div className="text-red-500 my-3 text-center">{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
              placeholder="E-mail address"
              name="email"
              type="email"
              ref={emailRef}
            />
          </div>
          <div className="mb-5">
            <input
              className="md:h-[3rem] h-[2.7rem] bg-gray-5 border-primary shadow-sm rounded-md w-full focus:border-green-500 focus:outline-none px-4"
              placeholder="Your Name"
              name="name"
              type="text"
              ref={passwordRef}
            />
          </div>
          <button className="text-white bg-green-400 py-2 w-full" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="my-4">
          <h4 className="text-center">Or Login with</h4>
          <div className="rounded grid grid-cols-2 gap-3 text-white mt-4">
            <button
              className="flex items-center justify-center bg-sky-600 px-3 py-2 rounded-md"
              onClick={GoogleAuthHandler}
            >
              <FaFacebook />
              Facebook
            </button>
            <button
              className="flex items-center justify-center bg-red-600 px-3 py-2  rounded-md"
              onClick={GoogleAuthHandler}
            >
              <FaGoogle />
              Google
            </button>
          </div>
        </div>
        <button
          className="flex items-center justify-center w-full mt-4"
          onClick={() => setShowForms("signup")}
        >
          Don't have account <span className="text-blue-500"> Register</span>
        </button>
      </div>
      <div className="w-[55%] md:block hidden">
        <img src="/images/kids.jpg" alt="" />
        {/* <img src="/images/kids-learning2.jpg" alt="" /> */}
      </div>
    </motion.div>
  );
}
