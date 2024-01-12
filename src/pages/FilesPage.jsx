import AnimatePage from "../components/AnimatePage";
import FileCard from "../components/FileCard";
import { CustomNav } from "../components/nabvar";

export default function FilesPage() {
  return (
    <AnimatePage cName="bg-white">
      <CustomNav title="Files" />
      <div className="p-4">
        <FileCard files={materials} />
      </div>
    </AnimatePage>
  );
}

const materials = [
  {
    title: "Advace JavaScript",
    subject: "Programming",
  },
  {
    title: "Basic Math",
    subject: "Math",
  },
  {
    title: "Christian Religion",
    subject: "CRE",
  },
  {
    title: "History of South Sudan",
    subject: "History",
  },
];
