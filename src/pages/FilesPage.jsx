import AnimatePage from "../components/AnimatePage";
import { CustomNav } from "../components/nabvar";

export default function FilesPage() {
  return (
    <AnimatePage>
      <CustomNav title="Files" />
      <div className="bg-white -mt-4 rounded-t-2xl p-4">Files Page</div>
    </AnimatePage>
  );
}
