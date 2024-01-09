import { CloseForm } from ".";
import AnimatePage from "../../components/AnimatePage";
import Input from "./Input";

export default function Register({ setShowForms }) {
  return (
    <AnimatePage cName="flex flex-col justify-between h-full w-full relative">
      <CloseForm />
      <div
        className="flex-1 bg-red-600 clip"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/kids-learning2.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      ></div>
      <div className="p-8">
        <h3 className="text-2xl text-center mb-6">Register</h3>
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
        <div className="text-center mt-4" onClick={() => setShowForms("login")}>
          Already have account <span className="text-blue-500">Login</span>
        </div>
      </div>
    </AnimatePage>
  );
}
