import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import { FaDownload } from "react-icons/fa";

export default function ResultPage() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      const getResuts = async () => {
        setIsLoading(true);
        try {
          const response = await axiosInstance
            .post("/results/single", { indexNo: index })
            .then((res) => res);
          setResult(response.data);
          setMessage("");
        } catch (error) {
          setMessage("Wrong Index No!");
          setResult(null);
        } finally {
          setIsLoading(false);
        }
      };
      getResuts();
    }
  }, [index]);

  const totalMarks = result
    ? result.eng +
      result.arabic +
      result.math +
      result.cre +
      result.islamic +
      result.physic +
      result.chemistry +
      result.biology +
      result.milaterySci +
      result.history
    : 0;

  const percenrage = Math.floor((totalMarks / 700) * 100);

  return (
    <div className="md:mx-[25%] m-3 bg-white md:shadow-md md:px-10 p-3">
      {message && <div className="p-10">{message}</div>}
      {isLoading && <div className="">Loading...</div>}

      {!isLoading && result && (
        <>
          <div className="mb-5">
            <div>
              <span className="text-gray-600 mr-4">Name:</span>
              {result.studentName}
            </div>
            <div className="mt-2">
              <span className="text-gray-600 mr-4">Index:</span>
              {result.studentIndex}
            </div>
          </div>
          <table className="w-full border text-left table-fixed">
            <thead>
              <tr>
                <td className="px-3 py-2">subject</td>
                <td className="px-3 py-2">obt</td>
                <td className="px-3 py-2">full/m</td>
                <td className="px-3 py-2">results</td>
              </tr>
            </thead>
            <tbody>
              <TableRow text="Eng" mark={result.eng} />
              <TableRow text="Math" mark={result.math} />
              <TableRow text="Arabic" mark={result.arabic} />
              <TableRow
                text={result.islamic ? "Islamic" : "CRE"}
                mark={result.islamic ? result.islamic : result.cre}
              />

              {result.section === "science" ? (
                <>
                  <TableRow text="Biology" mark={result.biology} />
                  <TableRow text="Physics" mark={result.physic} />
                  <TableRow text="Chemistry" mark={result.chemistry} />
                </>
              ) : (
                <>
                  <TableRow text="M/Sci" mark={result.milaterySci} />
                  <TableRow text="History" mark={result.history} />
                </>
              )}
            </tbody>
          </table>
          <div className="w-[70%] my-4">
            <div className="flex items-center justify-between">
              <span className="">Total Marks</span>
              <span className="border-t border-gray-500 border-dotted bg-gray-200 flex-1 mx-3"></span>
              <span>{totalMarks}</span>
            </div>
            <div className="flex items-center justify-between my-2">
              <span className="">Percentage</span>
              <span className="border-t border-gray-500 border-dotted bg-gray-200 flex-1 mx-3"></span>
              <span>{percenrage}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="">Results</span>
              <span className="border-t border-gray-500 border-dotted bg-gray-200 flex-1 mx-3"></span>
              <span
                className={`font-bold ${
                  percenrage >= 50 ? "text-green-600" : "text-red-600"
                }`}
              >
                {percenrage >= 50 ? "Pass" : "Fail"}
              </span>
            </div>
            <button className="flex items-center rounded px-3 py-1 bg-green-500 text-white mt-5">
              <FaDownload /> Download
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function TableRow({ text, mark }) {
  return (
    <tr className={`border-t ${mark < 50 ? "bg-red-50" : ""}`}>
      <td className="px-3 py-2">{text}</td>
      <td className="px-5 py-2">{mark}</td>
      <td className="px-3 py-2">100</td>
      <td className="px-3 py-2">{mark > 50 ? "Pass" : "Fail"}</td>
    </tr>
  );
}
