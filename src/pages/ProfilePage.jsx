import { useState } from "react";
import AnimatePage from "../components/AnimatePage";
import BackBtn from "../components/BackBtn";
import HomeBtn from "../components/nabvar/HomeBtn";
import MenuButton from "../components/nabvar/MenuButton";
import { useContextApi } from "../manager/ContextProvider";
import NotificationBtn from "../components/nabvar/NotificationBtn";

export default function ProfilePage() {
  const [currentCard, setCurrentCard] = useState("profile");

  const { profile } = useContextApi();

  return (
    <AnimatePage cName="bg-white">
      <div className="bg-green-400 text-white px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <BackBtn />
            <h3 className="text-xl">Profile</h3>
          </div>
          <div className="flex">
            <HomeBtn />
            <NotificationBtn cName="mx-4" />
            <MenuButton />
          </div>
        </div>
        <div className="flex items-center my-3">
          <img className="h-20 w-20 rounded-full" src={profile.avatar} alt="" />
          <div className="flex-1 ml-3">
            <h2 className="text-2xl">{profile.name}</h2>
            <p className="text-x">{profile.grade}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-left">
        <span
          className={`${
            currentCard === "profile" ? "border-b-green-400" : "text-gray-400"
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
            currentCard === "fav-books" ? "border-b-green-400" : "text-gray-400"
          } border-b-2 flex-1 px-4 py-2`}
          onClick={() => setCurrentCard("fav-books")}
        >
          Fav Books
        </span>
      </div>
      {currentCard === "profile" && <ProfileCard />}
      {currentCard === "files" && <FilesCard />}
      {currentCard === "fav-books" && <FavBooksCard />}
    </AnimatePage>
  );
}

function FilesCard() {
  return <div className="">FavBooksCard</div>;
}

function FavBooksCard() {
  return <div className="">FavBooksCard</div>;
}

function ProfileCard() {
  return <div className="">profile</div>;
}
