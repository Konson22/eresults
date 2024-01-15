import Logo from "./Logo";
import MenuButton from "./MenuButton";
import ProfileBtn from "./ProfileBtn";
import BackBtn from "../BackBtn";
import HomeBtn from "./HomeBtn";
import NotificationBtn from "./NotificationBtn";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center z-30">
      <Logo />
      <div className="flex items-center text-white">
        <HomeBtn cName="mr-4" />
        <NotificationBtn />
        <ProfileBtn />
        <MenuButton />
      </div>
    </nav>
  );
}

export function CustomNav({ title, cName = "pb-10", searchBar = null }) {
  return (
    <div
      className={`${cName} px-4 pt-4 text-white`}
      style={{
        backgroundImage: `linear-gradient(rgba(7, 130, 179, 0.8), rgba(7, 130, 179, 0.8)), url(${
          process.env.PUBLIC_URL + "/images/kids-learning.jpg"
        })`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BackBtn />
          <h3 className="text-xl">{title}</h3>
        </div>
        <div className="flex items-center">
          <HomeBtn />
          <ProfileBtn />
          <MenuButton />
        </div>
      </div>
      {searchBar && searchBar}
    </div>
  );
}
