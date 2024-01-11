import { useState } from "react";
import { CustomNav } from "../../components/nabvar";
import SSDSylbus from "./SSDSylbus";
import OnlineBooks from "./OnlineBooks";

export default function ResourcePage() {
  const [currentCard, setCurrentCard] = useState("sylbus");
  return (
    <div className="">
      <CustomNav title="Resources" />
      <div className="bg-white -mt-4 rounded-t-2xl overflow-hidden">
        <div className="flex justify-between text-center">
          <span
            className={`${
              currentCard === "sylbus" ? "bg-gray-50 border-green-500" : ""
            } border-b-2 flex-1 py-2`}
            onClick={() => setCurrentCard("sylbus")}
          >
            SSD Sylbus
          </span>
          <span
            className={`${
              currentCard === "books" ? "bg-gray-50 border-green-500" : ""
            } border-b-2 flex-1 py-2`}
            onClick={() => setCurrentCard("books")}
          >
            Online Books
          </span>
        </div>
        {currentCard === "sylbus" && <SSDSylbus />}
        {currentCard === "books" && <OnlineBooks />}
      </div>
    </div>
  );
}
