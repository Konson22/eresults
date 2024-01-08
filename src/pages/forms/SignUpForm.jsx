import Input from "./Input";
import { FiUserPlus } from "react-icons/fi";
import { CloseForm } from ".";
import AnimatePage from "../../components/AnimatePage";

export default function SignUpForm({ setShowForms }) {
  return (
    <AnimatePage cName="md:w-[40%] w-[85%] bg-green-500 text-white rounded-lg px-5 pb-5 relative">
      <CloseForm />
      <div className="text-center">
        <div className="bg-white text-green-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl p-2 mx-auto -mt-6 mb-1">
          <FiUserPlus />
        </div>
        <span className="text-2xl block mb-4">Login</span>
      </div>
      <form>
        <Input name="name" placeholder="Name" type="text" />
        <Input name="email" placeholder="E-mail" type="email" />
        <Input name="school" placeholder="School name" type="text" />
        <Input name="password" placeholder="Password" type="password" />
        <Input name="password" placeholder="Password" type="password" />
        <button className="bg-green-400 text-white py-2 w-full">Sign up</button>
      </form>
      <div className="text-center mt-4" onClick={() => setShowForms("login")}>
        already have account login
      </div>
    </AnimatePage>
  );
}
