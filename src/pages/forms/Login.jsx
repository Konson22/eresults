import { FaFacebook, FaGoogle } from "react-icons/fa";
import Input from "./Input";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config";
import { useContextApi } from "../../manager/ContextProvider";
import { useState } from "react";
import { FiUser, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { menuVars } from "./Signup";

export default function Login() {
  const { setShowForms, setProfile } = useContextApi();
  const [message, setMessage] = useState("");

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
        <div className="text-center mb-5">
          <div className="text-3xl rounded-full bg-gray-200 p-3 mb-2 mx-auto w-max">
            <FiUser />
          </div>
          <span className="text-xl">Login</span>
        </div>
        {message && message}
        <form>
          <Input name="email" placeholder="E-mail" type="email" />
          <Input name="password" placeholder="Password" type="email" />
          <button className="text-white bg-green-400 py-2 w-full">Login</button>
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
