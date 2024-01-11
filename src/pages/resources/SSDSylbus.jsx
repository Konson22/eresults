import { useState } from "react";
import { CustomNav } from "../../components/nabvar";
import AnimatePage from "../../components/AnimatePage";

export default function SSDSylbus() {
  const [currentCard, setCurrentCard] = useState("primary");

  return (
    <AnimatePage>
      <CustomNav title="SSD Sylbus" />
      <div className="-mt-3 bg-white rounded-2xl overflow-hidden">
        <div className="flex justify-between text-left">
          <span
            className={`${
              currentCard === "primary" ? "border-b-green-400" : ""
            } border-b-2 flex-1 px-4 py-2`}
            onClick={() => setCurrentCard("primary")}
          >
            Primary
          </span>
          <span
            className={`${
              currentCard === "secondary" ? "border-b-green-400" : ""
            } border-b-2 flex-1 px-4 py-2`}
            onClick={() => setCurrentCard("secondary")}
          >
            Secondary
          </span>
        </div>
        {currentCard === "primary" && <PrimaryBooks />}
        {currentCard === "secondary" && <SecondaryBooks />}
      </div>
    </AnimatePage>
  );
}

function PrimaryBooks() {
  return (
    <div className="px-4 py-3">
      <h2 className="text-xl">Primary Books</h2>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((book) => (
          <div className="border">
            <img className="h-[100px]" src={book.image} alt="" />
            <div className="p-3">
              <h3 className="">{book.subject}</h3>
              <span className="text-sm">{book.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecondaryBooks() {
  return (
    <div className="">
      <h2 className="text-xl">Secondary Books</h2>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((book) => (
          <div className="border">
            <img className="h-[100px]" src={book.image} alt="" />
            <div className="p-3">
              <h3 className="">{book.subject}</h3>
              <span className="text-sm">{book.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
  {
    grade: "Primary 2",
    subject: "Math",
    image:
      process.env.PUBLIC_URL + "./images/pexels-shelagh-murphy-2883380.jpg",
  },
];
