import { useState } from "react";
import { useContextApi } from "../manager/ContextProvider";

export default function ProfilePage() {
  const [currentCard, setCurrentCard] = useState("profile");

  const { profile } = useContextApi();

  return (
    <div className="bg-white">
      {profile && (
        <>
          <div className="bg-green-400 text-white px-4 py-3">
            <div className="flex items-center my-3">
              <img
                className="h-20 w-20 rounded-full"
                src={profile.avatar}
                alt=""
              />
              <div className="flex-1 ml-3">
                <h2 className="text-2xl">{profile.name}</h2>
                <p className="text-x">{profile.grade}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-left">
            <span
              className={`${
                currentCard === "profile"
                  ? "border-b-green-400"
                  : "text-gray-400"
              } border-b-2 flex-1 px-4 py-2`}
              onClick={() => setCurrentCard("profile")}
            >
              Profile
            </span>
            <span
              className={`${
                currentCard === "files" ? "border-b-green-400" : "text-gray-400"
              } border-b-2 flex-1 px-4 py-2`}
              onClick={() => setCurrentCard("files")}
            >
              My Files
            </span>
            <span
              className={`${
                currentCard === "fav-books"
                  ? "border-b-green-400"
                  : "text-gray-400"
              } border-b-2 flex-1 px-4 py-2`}
              onClick={() => setCurrentCard("fav-books")}
            >
              Fav Books
            </span>
          </div>
          {currentCard === "profile" && <ProfileCard />}
          {currentCard === "files" && <FilesCard />}
          {currentCard === "fav-books" && <FavBooksCard />}
        </>
      )}
    </div>
  );
}

function FilesCard() {
  return <div className="p-4">FavBooksCard</div>;
}

function FavBooksCard() {
  return <div className="p-4">FavBooksCard</div>;
}

function ProfileCard() {
  return <div className="p-4">profile</div>;
}
