import { FiDownload, FiStar } from "react-icons/fi";

export default function FileCard({ files }) {
  return (
    <div>
      {files.map((file) => (
        <div className="bg-white/50 flex items-center mb-3 rounded-md px-3 py-2">
          <div className="h-8 w-8 flex items-center justify-center bg-green-300 rounded-full">
            {file.subject.split("")[0]}
          </div>
          <div className="flex-1 ml-3">
            <p>{file.title}</p>
            <h4 className="text-sm text-gray-500">{file.subject}</h4>
          </div>
          <div className="flex items-center">
            <span className="mr-4">
              <FiStar />
            </span>
            <span>
              <FiDownload />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
