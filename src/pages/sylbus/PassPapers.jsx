import { BooksDropDown } from ".";
import FileCard from "../../components/FileCard";
import BackBtn from "../../utils/BackBtn";

const booksNames = [
  "Primary 1",
  "Primary 2",
  "Primary 3",
  "Primary 4",
  "Primary 5",
  "Primary 6",
  "Primary 7",
  "Primary 8",
];

export default function PassPapers() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-1">
          <BackBtn />
          <h3 className="text-xl">Pass papers</h3>
        </div>
        <BooksDropDown names={booksNames} title="Subject" />
        <select className="rounded-md border border-gray-100 bg-gray-50 py-1 ml-2">
          <option value="All books">Years</option>
          {[...new Array(5)].map((grade, index) => (
            <option className="text-sm" value="All books">
              {2018 + index + 1}/{2018 + index + 2}
            </option>
          ))}
        </select>
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
