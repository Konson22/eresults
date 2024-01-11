import { FaFacebook, FaGoogle } from "react-icons/fa";
import Input from "./Input";
import AnimatePage from "../../components/AnimatePage";
import { Link } from "react-router-dom";
import { CustomNav } from "../../components/nabvar";

export default function Login() {
  return (
    <AnimatePage>
      <CustomNav title="Login" cName="pb-24" />
      <div className="-mt-3 bg-white rounded-2xl p-6">
        <h3 className="text-2xl text-center mb-7">Login</h3>
        <form>
          <Input name="email" placeholder="E-mail" type="email" />
          <Input name="password" placeholder="Password" type="email" />
          <button className="text-white bg-green-400 py-2 w-full">Login</button>
        </form>
        <div className="my-4">
          <h4 className="text-center">Or Login with</h4>
          <div className="rounded grid grid-cols-2 gap-3 text-white mt-4">
            <button className="flex items-center justify-center bg-sky-600 md:text-2xl px-3 py-2rounded-md ">
              <FaFacebook />
              Facebook
            </button>
            <button className="flex items-center justify-center bg-red-600 md:text-2xl px-3 py-2 rounded-md ">
              <FaGoogle />
              Google
            </button>
          </div>
        </div>
        <Link className="text-center mt-4" to="/signup">
          Don't have account <span className="text-blue-500">Register</span>
        </Link>
      </div>
    </AnimatePage>
  );
}
