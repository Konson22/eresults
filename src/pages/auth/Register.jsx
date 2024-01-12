import { Link } from "react-router-dom";
import AnimatePage from "../../components/AnimatePage";
import Input from "./Input";
import Navbar from "../../components/nabvar";

export default function Register() {
  return (
    <AnimatePage cName="h-screen flex flex-col pb-10 bg-white">
      <div
        className="flex-1 px-4 pt-2 text-white clip"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 130, 179, 0.4), rgba(7, 130, 179, 0.4)), url(${
            process.env.PUBLIC_URL + "/images/kids-learning2.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <Navbar />
      </div>
      <div className="px-8">
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
        <Link className="text-center block mt-4" to="/login">
          Already have account <span className="text-blue-500">Login</span>
        </Link>
      </div>
    </AnimatePage>
  );
}
