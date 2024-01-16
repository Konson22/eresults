import { useState } from "react";
import SeniorBooks from "./SeniorBooks";
import PrimaryBooks from "./PrimaryBooks";

export default function Sylbus() {
  const [currentCard, setCurrentCard] = useState("primary");
  return (
    <div>
      <div className="flex items-center justify-between text-center border-t">
        <div
          className={`${
            currentCard === "primary"
              ? "border-b-green-400 bg-slate-100"
              : "text-gray-400"
          } border-b-2 flex-1 px-4 py-2`}
          onClick={() => setCurrentCard("primary")}
        >
          Primary
        </div>
        <div
          className={`${
            currentCard === "secondary"
              ? "border-b-green-400 bg-slate-100"
              : "text-gray-400"
          } border-b-2 flex-1 px-4 py-2`}
          onClick={() => setCurrentCard("secondary")}
        >
          Secondary
        </div>
      </div>
      {currentCard === "primary" && <PrimaryBooks />}
      {currentCard === "secondary" && <SeniorBooks />}
    </div>
  );
}

export function BooksDropDown({ names, title = "All books" }) {
  return (
    <select className="rounded-md border border-gray-100 bg-white py-2">
      <option value="All books">{title}</option>
      {names.map((grade) => (
        <option value="All books">{grade}</option>
      ))}
    </select>
  );
}
