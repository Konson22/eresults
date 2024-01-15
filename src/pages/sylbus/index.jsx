import { useState } from "react";
import SeniorBooks from "./SeniorBooks";
import PrimaryBooks from "./PrimaryBooks";
import PassPapers from "./PassPapers";

export default function Sylbus() {
  const [currentCard, setCurrentCard] = useState("primary");
  return (
    <div>
      <div className="flex items-center justify-between text-center">
        <div
          className={`${
            currentCard === "primary" ? "border-b-green-400" : "text-gray-400"
          } border-b-2 flex-1 px-4 py-2`}
          onClick={() => setCurrentCard("primary")}
        >
          Primary
        </div>
        <div
          className={`${
            currentCard === "secondary" ? "border-b-green-400" : "text-gray-400"
          } border-b-2 flex-1 px-4 py-2`}
          onClick={() => setCurrentCard("secondary")}
        >
          Secondary
        </div>
        <div
          className={`${
            currentCard === "pass-paper"
              ? "border-b-green-400"
              : "text-gray-400"
          } border-b-2 flex-1 px-4 py-2`}
          onClick={() => setCurrentCard("pass-paper")}
        >
          Pass papers
        </div>
      </div>
      {currentCard === "primary" && <PrimaryBooks />}
      {currentCard === "secondary" && <SeniorBooks />}
      {currentCard === "pass-paper" && <PassPapers />}
    </div>
  );
}

export function BooksDropDown({ names, title = "All books" }) {
  return (
    <select className="rounded-md border border-gray-100 bg-gray-50 py-1">
      <option value="All books">{title}</option>
      {names.map((grade) => (
        <option value="All books">{grade}</option>
      ))}
    </select>
  );
}
