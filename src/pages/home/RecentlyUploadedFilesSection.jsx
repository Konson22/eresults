import FileCard from "../../components/FileCard";

export default function RecentlyUploadedFilesSection() {
  return (
    <div className="my-6 bg-gray-100 mx-3 px-3 py-3 rounded-md shadow-sm">
      <h2 className="text-xl">Recntly Upload</h2>
      <div className="mt-4">
        <FileCard files={materials} />
      </div>
    </div>
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
