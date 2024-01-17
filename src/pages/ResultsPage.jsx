import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";

export default function ResultPage() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query] = useSearchParams();
  const indexNo = query.get("index");
  // const grade = query.get("grade");

  useEffect(() => {
    if (indexNo) {
      const getResuts = async () => {
        setIsLoading(true);
        try {
          const response = await axiosInstance
            .post("/results/single", { indexNo })
            .then((res) => res);
          setResult(response.data);
        } catch (error) {
          setMessage("Wrong Index No!");
        } finally {
          setIsLoading(false);
        }
      };
      getResuts();
    }
  }, [indexNo]);

  const percenrage = result
    ? ((result.eng +
        result.arabic +
        result.math +
        result.cre +
        result.islamic +
        result.physic +
        result.chemistry +
        result.biology +
        result.milaterySci +
        result.history) /
        700) *
      100
    : 0;
  // console.log(Math.floor(percenrage));

  return (
    <div className="">
      {message && <div className="p-10">{message}</div>}
      {isLoading && <div className="">Loading...</div>}

      {!isLoading && result && (
        <div className="md:mx-[25%] bg-gray-50 md:shadow-md md:px-10 px-4 py-3">
          <h3 className="text-xl mb-">Exams Results</h3>
          <div className="flex items-center my-5">
            <div className="flex-1">
              <div>
                <span className="text-gray-600 font-semibold">Name</span>:
                {result.studentName}
              </div>
              <div className="mt-2">
                <span className="text-gray-600 font-semibold">Index</span>:
                {result.studentIndex}
              </div>
              <div className="my-2">
                <span className="text-gray-600 font-semibold">School</span>:
                {result.schoolName}
              </div>
            </div>
            <div className="text-center">
              <div
                className={`${
                  Math.floor(percenrage) >= 50
                    ? "text-green-300 border-green-500"
                    : "text-red-300 border-red-500"
                } text-3xl font-bold`}
              >
                {Math.floor(percenrage)}%
              </div>
              <p>{Math.floor(percenrage) >= 50 ? "Pass" : "Fail"}</p>
              {/* <div
                className={`${
                  Math.floor(percenrage) >= 50
                    ? "bg-green-300 border-green-500"
                    : "bg-red-300 border-red-500"
                } border-2  border-green-600 h-20 w-20 flex flex-col items-center justify-center rounded-full mx-auto`}
              >
                <div className="text-xl"> {Math.floor(percenrage)}%</div>
                <p>{Math.floor(percenrage) >= 50 ? "Pass" : "Fail"}</p>
              </div> */}
            </div>
          </div>
          <table className="w-full border text-left table-fixed bg-white">
            <thead>
              <tr>
                <td className="px-3 py-3">Subject</td>
                <td className="px-3 py-3">Obtained</td>
                <td className="px-3 py-3">F/Marks</td>
                <td className="px-3 py-3">Results</td>
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
          {/* <div className="flex justify-between items-center p-4">
            <span className="">
              <span className="font-bold">Percentage</span>: 78%
            </span>
            <span className="">
              <span className="font-bold">Results</span>: Pass
            </span>
          </div> */}
        </div>
      )}
    </div>
  );
}

function TableRow({ text, mark }) {
  return (
    <tr className={`border-t ${mark < 50 ? "bg-red-50" : ""}`}>
      <td className="px-3 py-2">{text}</td>
      <td className="px-3 py-2">{mark}</td>
      <td className="px-3 py-2">100</td>
      <td className="px-3 py-2">{mark > 50 ? "Pass" : "Fail"}</td>
    </tr>
  );
}
