import FileCard from "../../components/FileCard";

export default function RelatedFileSection() {
  return (
    <div className="md:my-0 my-6 bg-gradient-to-br to-pink-100 from-sky-100 border rounded-md p-4">
      <h2 className="text-xl">Suggested for you</h2>
      <div className="mt-4">
        <FileCard files={materials} />
      </div>
    </div>
  );
}

const materials = [
  {
    title: "Physics",
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
  {
    title: "Physics",
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
