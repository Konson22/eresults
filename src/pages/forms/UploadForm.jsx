import { CloseForm } from ".";
import AnimatePage from "../../components/AnimatePage";

export default function UploadForm() {
  return (
    <AnimatePage cName="p-4">
      <div className="bg-white p-4 rounded relative">
        <CloseForm />
        upload form
      </div>
    </AnimatePage>
  );
}
