import FileCard from "../components/FileCard";

const booksNames = [
  "English",
  "Math",
  "CRE",
  "Slamic",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Arabic",
];

export default function PassPapers() {
  return (
    <div className="md:px-[10%] px-4 py-3">
      <div className="md:flex items-center justify-between mb-4">
        <h3 className="md:mb-0 mb-4">Pass papers</h3>
        <div className="flex items-center justify-end">
          <div className="">
            <label className="block" htmlFor="">
              Subject
            </label>
          </div>
          <div className="ml-2">
            <label htmlFor="" className="block">
              Year
            </label>
            <select className="rounded-md border border-gray-100 bg-white py-2">
              <option value="all">All</option>
              {[...new Array(5)].map((grade, index) => (
                <option className="text-sm" value="All books">
                  {2018 + index + 1}/{2018 + index + 2}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <FileCard files={materials} />
    </div>
  );
}

const materials = [
  {
    year: "2022/2023",
    subject: "Science",
  },
  {
    year: "Basic Math",
    subject: "Math",
  },
  {
    year: "Christian Religion",
    subject: "CRE",
  },
  {
    year: "History of South Sudan",
    subject: "History",
  },
];
