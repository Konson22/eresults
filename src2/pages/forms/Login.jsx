import { FaFacebook, FaGoogle } from "react-icons/fa";
import Input from "./Input";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config";
import { useState } from "react";
import { useContextApi } from "../../manager/ContextProvider";

export default function Login() {
  const { setProfile } = useContextApi();
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
    <div className="h-screen flex flex-col p-10 bg-white">
      <h3 className="text-2xl text-center mb-7">Login</h3>
      {message && <span className="text-red-500">{message}</span>}
      <form>
        <Input name="email" placeholder="E-mail" type="email" />
        <Input name="password" placeholder="Password" type="email" />
        <button className="text-white bg-green-400 py-2 w-full">Login</button>
      </form>
      <div className="my-4">
        <h4 className="text-center">Or Login with</h4>
        <div className="rounded grid grid-cols-2 gap-3 text-white mt-4">
          <button
            className="flex items-center justify-center bg-sky-600 md:text-2xl px-3 py-2rounded-md"
            onClick={GoogleAuthHandler}
          >
            <FaFacebook />
            Facebook
          </button>
          <button
            className="flex items-center justify-center bg-red-600 md:text-2xl px-3 py-2 rounded-md"
            onClick={GoogleAuthHandler}
          >
            <FaGoogle />
            Google
          </button>
        </div>
      </div>
      <Link className="text-center block mt-4" to="/register">
        Don't have account <span className="text-blue-500">Register</span>
      </Link>
    </div>
  );
}
