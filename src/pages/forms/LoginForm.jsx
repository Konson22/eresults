import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import Input from "./Input";
import { FiUser } from "react-icons/fi";
import { CloseForm } from ".";
import AnimatePage from "../../components/AnimatePage";

export default function LoginForm({ setShowForms }) {
  return (
    <AnimatePage cName="md:w-[40%] w-[85%] bg-green-500 text-white rounded-lg px-5 pb-5 relative">
      <CloseForm />
      <div className="text-center">
        <div className="bg-white text-green-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl p-2 mx-auto -mt-6 mb-1">
          <FiUser />
        </div>
        <span className="text-2xl block mb-4">Login</span>
      </div>
      <form>
        <Input name="email" placeholder="E-mail" type="email" />
        <Input name="password" placeholder="Password" type="email" />
        <button className="text-white bg-green-400 py-2 w-full">Login</button>
      </form>
      <div className="my-4">
        <h4 className="text-center">Or Login with</h4>
        <div className="px-3 py-2 rounded flex items-center justify-evenly mt-4">
          <span className="bg-white md:text-2xl text-base border border-sky-600 px-3 py-2 text-sky-600 rounded-md ">
            <FaFacebook />
          </span>
          <span className="bg-white md:text-2xl text-base border border-rose-600 px-3 py-2 text-rose-600 rounded-md ">
            <FaGoogle />
          </span>
          <span className="bg-white md:text-2xl text-base border border-blue-500 text-blue-500 px-3 py-2 rounded-md ">
            <FaTwitter />
          </span>
        </div>
      </div>
      <div className="text-center mt-4" onClick={() => setShowForms("signup")}>
        Don't have account register
      </div>
    </AnimatePage>
  );
}
