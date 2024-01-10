import { CloseForm } from ".";
import AnimatePage from "../../components/AnimatePage";
import Input from "./Input";

export default function Upload({ setShowForms }) {
  return (
    <AnimatePage cName="flex items-center justify-between h-full w-full relative">
      <CloseForm />
      <div className="w-full p-8">
        <h3 className="text-2xl text-center my-6">Share Resource</h3>
        <form>
          <Input name="title" placeholder="Title" type="text" />
          <Input name="url" placeholder="Subject" type="text" />
          <Input name="url" placeholder="URL" type="text" />
          <Input name="file" placeholder="E-mail/Phone" type="file" />
          <button className="text-white bg-green-500 rounded py-2 w-full">
            Upload
          </button>
        </form>
      </div>
    </AnimatePage>
  );
}
