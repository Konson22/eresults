import { useSearchParams } from "react-router-dom";
import BackBtn from "../utils/BackBtn";
import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const [query] = useSearchParams();
  const indexNo = query.get("index");
  // const grade = query.get("grade");

  useEffect(() => {
    if (indexNo) {
      const getResuts = async () => {
        const response = await axiosInstance
          .post("/results/single", { indexNo })
          .then((res) => res);
        setResult(response.data);
      };
      getResuts();
    }
  }, [indexNo]);

  const percenrage = result
    ? ((result.eng +
        result.math +
        result.cre +
        result.islamic +
        result.physic +
        result.biology +
        result.chemistry +
        result.arabic) /
        700) *
      100
    : 0;
  console.log(Math.floor(percenrage));

  return (
    <div className="px-4">
      <div className="flex mb-5 mt-3">
        <BackBtn />
        <h3 className="text-xl">Your Results</h3>
      </div>
      {result ? (
        <div className="md:mx-[25%] bg-gray-50 md:shadow-md md:px-10 px-4 py-3">
          <div className="flex items-center">
            <div className="flex-1">
              <div>
                <span className="text-gray-600 font-semibold">Name</span>:
                {result.studentName}
              </div>
              <div className="my-2">
                <span className="text-gray-600 font-semibold">Index</span>:
                {result.studentIndex}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-200 border-2 font-bold  border-green-600 h-16 w-16 flex items-center justify-center rounded-full mx-auto">
                {Math.floor(percenrage)}%
              </div>
              <span>Results</span>
            </div>
          </div>
          <table className="w-full border text-left table-fixed mt-8">
            <thead>
              <tr>
                <td className="px-3 py-3">Subject</td>
                <td className="px-3 py-3">Obtained</td>
                <td className="px-3 py-3">F/Marks</td>
                <td className="px-3 py-3">Results</td>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-t ${result.eng < 50 ? "bg-red-300" : ""}`}>
                <td className="px-3 py-2">Eng</td>
                <td className="px-3 py-2">{result.eng}</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">
                  {result.eng > 50 ? (
                    "Pass"
                  ) : (
                    <span className="text-red-500">Fail</span>
                  )}
                </td>
              </tr>
              <tr
                className={`border-t ${result.arabic < 50 ? "bg-red-300" : ""}`}
              >
                <td className="px-3 py-2">Arabic</td>
                <td className="px-3 py-2">{result.arabic}</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">
                  {result.eng > 50 ? "Pass" : "Fail"}
                </td>
              </tr>
              {result.islamic ? (
                <tr
                  className={`border-t ${
                    result.islamic < 50 ? "bg-red-300" : ""
                  }`}
                >
                  <td className="px-3 py-2">Islamic</td>
                  <td className="px-3 py-2">{result.islamic}</td>
                  <td className="px-3 py-2">100</td>
                  <td className="px-3 py-2">
                    {result.islamic > 50 ? "Pass" : "Fail"}
                  </td>
                </tr>
              ) : (
                <tr
                  className={`border-t ${result.cre < 50 ? "bg-red-300" : ""}`}
                >
                  <td className="px-3 py-2">CRE</td>
                  <td className="px-3 py-2">{result.cre}</td>
                  <td className="px-3 py-2">100</td>
                  <td className="px-3 py-2">
                    {result.cre > 50 ? "Pass" : "Fail"}
                  </td>
                </tr>
              )}
              <tr
                className={`border-t ${result.math < 50 ? "bg-red-300" : ""}`}
              >
                <td className="px-3 py-2">Math</td>
                <td className="px-3 py-2">{result.math}</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">
                  {result.math > 50 ? "Pass" : "Fail"}
                </td>
              </tr>
              <tr
                className={`border-t ${
                  result.biology < 50 ? "bg-red-300" : ""
                }`}
              >
                <td className="px-3 py-2">Biology</td>
                <td className="px-3 py-2">{result.biology}</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">
                  {result.biology > 50 ? (
                    "Pass"
                  ) : (
                    <span className="text-red-500">Fail</span>
                  )}
                </td>
              </tr>
              <tr
                className={`border-t ${result.physic < 50 ? "bg-red-300" : ""}`}
              >
                <td className="px-3 py-2">Physic</td>
                <td className="px-3 py-2">{result.physic}</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">
                  {result.physic > 50 ? (
                    "Pass"
                  ) : (
                    <span className="text-red-500">Fail</span>
                  )}
                </td>
              </tr>
              <tr
                className={`border-t ${
                  result.chemistry < 50 ? "bg-red-300" : ""
                }`}
              >
                <td className="px-3 py-2">Chemistry</td>
                <td className="px-3 py-2">{result.chemistry}</td>
                <td className="px-3 py-2">100</td>
                <td className="px-3 py-2">
                  {result.chemistry > 50 ? "Pass" : "Fail"}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center p-4">
            <span className="">
              <span className="font-bold">Percentage</span>: 78%
            </span>
            <span className="">
              <span className="font-bold">Results</span>: Pass
            </span>
          </div>
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </div>
  );
}
