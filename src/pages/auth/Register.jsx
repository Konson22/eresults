import { Link } from "react-router-dom";
import AnimatePage from "../../components/AnimatePage";
import Input from "./Input";
import { CustomNav } from "../../components/nabvar";

export default function Register() {
  return (
    <AnimatePage>
      <CustomNav title="Register" cName="pb-24" />
      <div className="-mt-3 bg-white rounded-2xl p-6">
        <h3 className="text-2xl text-center mb-6">Sign up</h3>
        <form>
          <Input name="email" placeholder="Name" type="email" />
          <Input name="email" placeholder="E-mail/Phone" type="text" />
          <Input
            name="password"
            placeholder="Create Password"
            type="password"
          />
          <Input
            name="password"
            placeholder="Comfirm Password"
            type="password"
          />
          <button className="text-white bg-rose-500 py-2 w-full">
            Register
          </button>
        </form>
        <Link className="text-center mt-4" to="/login">
          Already have account <span className="text-blue-500">Login</span>
        </Link>
      </div>
    </AnimatePage>
  );
}
