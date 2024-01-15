import { useSearchParams } from "react-router-dom";
import { CustomNav } from "../components/nabvar";

export default function ResultPage() {
  const [query] = useSearchParams();
  const index = query.get("index");
  const grade = query.get("grade");
  return (
    <>
      <CustomNav title="Results" />
      <div className="md:mx-[25%] m-3 bg-gray-50 md:shadow-md md:px-10 px-4 py-3">
        <div className="flex items-center">
          <div className="flex-1">
            <div>
              <span className="text-gray-600 font-semibold">Name</span>: Konson
              Ak
            </div>
            <div className="my-2">
              <span className="text-gray-600 font-semibold">Index</span>:{" "}
              {index}
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Center</span>: Mahad
              Juba
            </div>
          </div>
          <div className="text-center">
            <div className="bg-green-200 border-2 font-bold  border-green-600 h-16 w-16 flex items-center justify-center rounded-full mx-auto">
              78%
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
            <tr className="border-t">
              <td className="px-3 py-2">Eng</td>
              <td className="px-3 py-2">50</td>
              <td className="px-3 py-2">100</td>
              <td className="px-3 py-2">Pass</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2">CRE</td>
              <td className="px-3 py-2">50</td>
              <td className="px-3 py-2">100</td>
              <td className="px-3 py-2">Pass</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2">Math</td>
              <td className="px-3 py-2">50</td>
              <td className="px-3 py-2">100</td>
              <td className="px-3 py-2">Pass</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2">Sci</td>
              <td className="px-3 py-2">50</td>
              <td className="px-3 py-2">100</td>
              <td className="px-3 py-2">Pass</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2">SST</td>
              <td className="px-3 py-2">50</td>
              <td className="px-3 py-2">100</td>
              <td className="px-3 py-2">Pass</td>
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
    </>
  );
}
