import { CloseForm } from ".";
import AnimatePage from "../../components/AnimatePage";
import Input from "./Input";

export default function Upload({ setShowForms }) {
  return (
    <AnimatePage cName="flex items-center justify-between h-full w-full relative">
      <CloseForm />
      <div className="w-full p-8">
        <span className="text-red-600 text-3xl text-center">
          Or progress....
        </span>
        <h3 className="text-2xl text-center my-6">Share Resource</h3>
        <form>
          <Input name="email" placeholder="Name" type="email" />
          <Input name="email" placeholder="E-mail/Phone" type="file" />
          <button className="text-white bg-rose-500 py-2 w-full">Upload</button>
        </form>
      </div>
    </AnimatePage>
  );
}
